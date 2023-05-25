export default function renderIdLink(data,variables) {
	
	const div = document.createElement('div');
	div.classList.add('text-truncate')
	const link = document.createElement('a');
	link.setAttribute('target', '_blank');
	link.textContent = data.id;
	if(!data){
		link.textContent = '—';
	}

	link.href = `/${variables.networkForURL}/token/${data.address}/id/${data.id}`; // Change  URL
	
	div.appendChild(link);

	return div;
}
