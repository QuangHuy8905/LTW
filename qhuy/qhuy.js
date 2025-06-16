document.addEventListener('DOMContentLoaded', () => {
    // Hiệu ứng cho biểu đồ kỹ năng (vòng tròn)
    const circularProgressBars = document.querySelectorAll('.circular-progress');
    circularProgressBars.forEach(progressBar => {
        const value = parseFloat(progressBar.dataset.progress);
        const max_value = 5.0; // Thang điểm tối đa
        const percentage = (value / max_value) * 100;

        const circle = progressBar.querySelector('.progress-ring-fill');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;

        setTimeout(() => { // Kích hoạt hiệu ứng sau trễ nhỏ
            const offset = circumference - (percentage / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }, 100);
    });

    // Hiệu ứng cho thanh tiến độ mục tiêu nghề nghiệp (ngang)
    const careerProgressBars = document.querySelectorAll('.career-goals .progress-bar');
    careerProgressBars.forEach(progressBar => {
        const targetWidth = progressBar.dataset.progressWidth;
        progressBar.style.width = '0'; // Đặt ban đầu là 0
        setTimeout(() => { // Sau trễ, đặt chiều rộng cuối cùng
            progressBar.style.width = targetWidth;
        }, 100);
    });

    // Hiệu ứng cho thanh tiến độ Ngôn ngữ (ngang)
    const languageProgressBars = document.querySelectorAll('.language-section .lang-progress-bar');
    languageProgressBars.forEach(progressBar => {
        const targetWidth = progressBar.dataset.langWidth;
        progressBar.style.width = '0'; // Đặt ban đầu là 0
        setTimeout(() => { // Sau trễ, đặt chiều rộng cuối cùng
            progressBar.style.width = targetWidth;
        }, 100);
    });

    // Chức năng Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeButton = document.querySelector('.close-button');
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        if (item.hasAttribute('data-full-image')) { // Chỉ xử lý item có ảnh đầy đủ
            item.addEventListener('click', function(event) {
                event.preventDefault(); 
                const fullImageUrl = this.getAttribute('data-full-image');
                lightbox.style.display = 'flex'; // Hiển thị lightbox
                lightboxImg.src = fullImageUrl; // Đặt nguồn ảnh
            });
        }
    });

    closeButton.addEventListener('click', () => { // Đóng khi click nút 'x'
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (event) => { // Đóng khi click ra ngoài ảnh
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});