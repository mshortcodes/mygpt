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

	// mobile sidebar state
	let isMobileSidebarOpen = false;

	openMobileSidebarBtn.addEventListener('click', () => {
		isMobileSidebarOpen = true;
		mobileSideBar.classList.remove('hidden');
		mobileSideBar.classList.add('flex');
		document.body.style.overflowY = 'hidden';
	});

	closeMobileSideBarBtn.addEventListener('click', () => {
		isMobileSidebarOpen = false;
		mobileSideBar.classList.remove('flex');
		mobileSideBar.classList.add('hidden');
		document.body.style.overflowY = 'auto';
	});

	closeMobileSidebarDiv.addEventListener('click', () => {
		isMobileSidebarOpen = false;
		mobileSideBar.classList.remove('flex');
		mobileSideBar.classList.add('hidden');
		document.body.style.overflowY = 'auto';
	});

	// fix bug where overflow-y remains disabled if vp size changes while mobile sidebar open
	window.addEventListener('resize', () => {
		if (isMobileSidebarOpen && window.innerWidth >= 768) {
			document.body.style.overflowY = 'auto';
		}
	});
};
