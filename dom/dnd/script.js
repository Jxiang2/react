const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  function onDragStart() {
    draggable.classList.add("dragging");
  }
  function onDragEnd() {
    draggable.classList.remove("dragging");
  }

  draggable.addEventListener("dragstart", onDragStart);
  draggable.addEventListener("dragend", onDragEnd);
});

containers.forEach((container) => {
  function onDragOver(e) {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    const targetElement = getDragAfterElement(container, e.clientY);

    if (targetElement === null) {
      container.appendChild(draggable);
    } else {
      // insert draggable before target
      container.insertBefore(draggable, targetElement);
    }
  }

  container.addEventListener("dragover", onDragOver);
});

/**
 * @param {Element} container
 * @param {number} mousePosition
 * @returns {Element} a desired element to be placed after the inserted element
 */
function getDragAfterElement(container, mousePosition) {
  const notDraggedElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  const target = notDraggedElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = mousePosition - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    },
  );

  console.log(target.element);

  return target.element;
}
