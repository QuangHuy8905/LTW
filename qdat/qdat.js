const scrollContainer = document.getElementById('scrollContainer');

let isMouseDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  if (e.button !== 0) return; // Chỉ xử lý chuột trái
  isMouseDown = true;
  scrollContainer.classList.add('active');
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
  isMouseDown = false;
  scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', () => {
  isMouseDown = false;
  scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault(); // Ngăn chọn chữ khi kéo
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 2; // Tốc độ cuộn
  scrollContainer.scrollLeft = scrollLeft - walk;
});
