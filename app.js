const modal=document.getElementById('bookingModal'), chat=document.getElementById('chat');
function openBooking(service){modal.classList.add('open'); if(service) document.getElementById('service').value=service; updatePrice();}
function closeBooking(){modal.classList.remove('open');}
function openChat(){chat.classList.add('open')}
function closeChat(){chat.classList.remove('open')}
function updatePrice(){const s=document.getElementById('service').value;document.getElementById('total').textContent=s.includes('Complete')?'€80':s.includes('Interieur')?'€50':'€45'}
document.getElementById('service').addEventListener('change',updatePrice);
document.getElementById('bookingForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('bookingForm').hidden=true;document.getElementById('success').hidden=false});
function addMsg(text,cls){const b=document.getElementById('chatBody');const d=document.createElement('div');d.className=cls;d.textContent=text;b.appendChild(d);b.scrollTop=b.scrollHeight}
function botReply(q){addMsg(q,'user');setTimeout(()=>{if(q.includes('afspraak')){addMsg('Natuurlijk! Klik op “Boek een reiniging” om uw auto, dienst, datum en adres in te vullen.','bot')}else{addMsg('Onze prijzen beginnen vanaf €45 voor exterieur, €50 voor interieur en €80 voor een complete reiniging.','bot')}},400)}
function sendChat(){const i=document.getElementById('chatInput');if(!i.value.trim())return;botReply(i.value);i.value=''}
document.getElementById('date').min=new Date().toISOString().split('T')[0];
