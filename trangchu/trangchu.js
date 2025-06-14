document.addEventListener('DOMContentLoaded', function() {
    // Lắng nghe sự kiện click trên tất cả các card có class 'card'
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Lấy đường dẫn từ thuộc tính data-href của card
            const href = this.dataset.href;

            // Kiểm tra xem phần tử được click có phải là một liên kết mạng xã hội (icon) hay không
            // closest() sẽ tìm phần tử cha gần nhất khớp với selector
            const isSocialIconLink = event.target.closest('.social-icons a');

            // Nếu click không phải trên một liên kết mạng xã hội VÀ card có data-href
            if (!isSocialIconLink && href) {
                // Chuyển hướng trình duyệt đến URL đã lưu
                window.location.href = href;
            }
            // Nếu click vào social icon link, event sẽ được xử lý bởi liên kết đó và không làm gì ở đây.
        });
    });
});