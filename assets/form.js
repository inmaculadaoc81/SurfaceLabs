const form=document.querySelector("#contact-form");
if(form){
  form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const status=document.querySelector("#form-status");
    const button=form.querySelector('button[type="submit"]');
    status.textContent="Enviando...";
    status.className="status";
    button.disabled=true;
    try{
      const response=await fetch("/api/contact",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Object.fromEntries(new FormData(form).entries()))
      });
      const data=await response.json().catch(()=>({}));
      if(!response.ok||!data.ok) throw new Error(data.code||"SEND_FAILED");
      status.textContent="Consulta enviada correctamente.";
      status.className="status ok";
      form.reset();
    }catch(err){
      console.error(err);
      status.textContent="No se pudo enviar la consulta. También puedes contactar por WhatsApp o teléfono.";
      status.className="status error";
    }finally{
      button.disabled=false;
    }
  });
}