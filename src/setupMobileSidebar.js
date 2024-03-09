export const setupMobileSidebar = () => {
	const openMobileSidebarBtn = document.getElementById(
		'openMobileSidebarBtn',
	);
	const mobileSideBar = document.getElementById('mobileSidebar');
	const closeMobileSideBarBtn = document.getElementById(
		'closeMobileSidebarBtn',
	);
	const closeMobileSidebarDiv = document.getElementById(
		'closeMobileSidebarDiv',
	);

	openMobileSidebarBtn.addEventListener('click', () => {
		mobileSideBar.classList.remove('hidden');
		mobileSideBar.classList.add('flex');
	});

	closeMobileSideBarBtn.addEventListener('click', () => {
		mobileSideBar.classList.remove('flex');
		mobileSideBar.classList.add('hidden');
	});

	closeMobileSidebarDiv.addEventListener('click', () => {
		mobileSideBar.classList.remove('flex');
		mobileSideBar.classList.add('hidden');
	});
};
