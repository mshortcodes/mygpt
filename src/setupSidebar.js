export const setupSidebar = () => {
	const openSidebarBtn = document.getElementById('openSidebarBtn');
	const closeSidebarBtn = document.getElementById('closeSidebarBtn');
	const sidebarBtnDiv = document.getElementById('sidebarBtnDiv');
	const sidebar = document.querySelector('aside');
	const newChatBtn = document.getElementById('newChatBtn');

	// show sidebar, switch chevron, adjust positioning, hide new chat button
	openSidebarBtn.addEventListener('click', () => {
		sidebar.classList.add('md:flex');
		openSidebarBtn.classList.add('hidden');
		closeSidebarBtn.classList.remove('hidden');
		sidebarBtnDiv.classList.remove('left-0');
		sidebarBtnDiv.classList.add('left-80');
		newChatBtn.classList.add('md:hidden');
	});

	// hide sidebar, switch chevron, adjust positioning, show new chat button
	closeSidebarBtn.addEventListener('click', () => {
		sidebar.classList.remove('md:flex');
		openSidebarBtn.classList.remove('hidden');
		closeSidebarBtn.classList.add('hidden');
		sidebarBtnDiv.classList.remove('left-80');
		sidebarBtnDiv.classList.add('left-0');
		newChatBtn.classList.remove('md:hidden');
	});
};
