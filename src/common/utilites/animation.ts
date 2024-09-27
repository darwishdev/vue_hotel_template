// Define the observer options (e.g., when 50% of the element is visible)
const observerOptions = {
	root: null, // Use the browser viewport as the container
	rootMargin: '0px 0px -200px 0px', // Offset by 200px from the bottom
	threshold: 0 // Trigger as soon as any part of the element is visible
};

// Callback function when the element is intersecting

// Define the callback function for the IntersectionObserver in TypeScript
const intersectionCallback: IntersectionObserverCallback = (
	entries: IntersectionObserverEntry[],
	_observer: IntersectionObserver
) => {
	entries.forEach((entry: IntersectionObserverEntry) => {
		if (entry.isIntersecting) {
			// Add a class that starts the animation when in view
			(entry.target as HTMLElement).classList.add('animating');
		} else {
			// Optionally, remove the class when the element is out of view
			(entry.target as HTMLElement).classList.remove('animating');
		}
	});
};

// Create the observer
const observer = new IntersectionObserver(intersectionCallback, observerOptions);
export default observer
// Attach the observer to each element you want to animate


