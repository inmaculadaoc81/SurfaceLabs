const nodemailer=require("nodemailer");
const clean=(v,m=3000)=>String(v??"").replace(/[<>]/g,"").trim().slice(0,m);

module.exports=async(req,res)=>{
  const env=["SMTP_HOST","SMTP_PORT","SMTP_USER","SMTP_PASS","CONTACT_EMAIL"];

  if(req.method==="GET"){
    return res.status(200).json({
      ok:true,
      service:"SurfaceLabs Webempresa SMTP API",
      node:process.version,
      environment:Object.fromEntries(env.map(k=>[k,!!process.env[k]]))
    });
  }

  if(req.method!=="POST"){
    return res.status(405).json({ok:false,code:"METHOD_NOT_ALLOWED"});
  }

  try{
    const required=["SMTP_HOST","SMTP_PORT","SMTP_USER","SMTP_PASS"];
    const missing=required.filter(k=>!process.env[k]);
    if(missing.length){
      return res.status(500).json({ok:false,code:"MISSING_SMTP_ENV",missing});
    }

    const d=req.body||{};
    const nombre=clean(d.nombre,120);
    const telefono=clean(d.telefono,50);
    const email=clean(d.email,160);
    const equipo=clean(d.equipo,180);
    const mensaje=clean(d.mensaje,3000);

    if(!nombre||!telefono||!email||!equipo||!mensaje){
      return res.status(400).json({ok:false,code:"INVALID_FORM_DATA"});
    }

    const port=Number(process.env.SMTP_PORT||465);
    const secure=String(process.env.SMTP_SECURE||(port===465?"true":"false"))==="true";

    const transporter=nodemailer.createTransport({
      host:process.env.SMTP_HOST,
      port,
      secure,
      auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS
      }
    });

    await transporter.verify();

    await transporter.sendMail({
      from:`"SurfaceLabs" <${process.env.SMTP_USER}>`,
      to:process.env.CONTACT_EMAIL||"soporte@kelatos.com",
      replyTo:email,
      subject:"Nueva consulta SurfaceLabs - Servicio Técnico Microsoft Surface",
      text:`Nueva consulta SurfaceLabs

Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${email}
Equipo: ${equipo}

Consulta:
${mensaje}`
    });

    return res.status(200).json({ok:true});
  }catch(e){
    console.error("SurfaceLabs SMTP:",e);
    return res.status(500).json({
      ok:false,
      code:"SMTP_SEND_FAILED",
      detail:e.code||"UNKNOWN"
    });
  }
};