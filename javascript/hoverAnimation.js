const wrapper = document.getElementById("scroll-animation-wrapper");
const className = "in-view";

wrapper.classList.remove(className);

const observer2 = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				wrapper.classList.add(className);
				return;
			}

			wrapper.classList.remove(className);
		});
	},
	{
		threshold: 1
	}
);

observer2.observe(wrapper);
