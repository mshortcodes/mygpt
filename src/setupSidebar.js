export const setupSidebar = () => {
	const openSidebarBtn = document.getElementById('openSidebarBtn');
	const closeSidebarBtn = document.getElementById('closeSidebarBtn');
	const sidebar = document.querySelector('aside');
	const newChatBtn = document.getElementById('newChatBtn');

	// show sidebar, switch chevron, hide new chat button
	openSidebarBtn.addEventListener('click', () => {
		sidebar.classList.add('md:flex');
		openSidebarBtn.classList.add('hidden');
		closeSidebarBtn.classList.remove('hidden');
		newChatBtn.classList.add('md:hidden');
	});

	// hide sidebar, switch chevron, show new chat button
	closeSidebarBtn.addEventListener('click', () => {
		sidebar.classList.remove('md:flex');
		openSidebarBtn.classList.remove('hidden');
		closeSidebarBtn.classList.add('hidden');
		newChatBtn.classList.remove('md:hidden');
	});
};
