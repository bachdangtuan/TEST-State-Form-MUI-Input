### Form Validation
Xử lý trên state component
1 . Khởi tạo giá trị state với 2 object
 state = {
        values: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
        },
        errors: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
        }
    }

2. Chạy hàm handleChangValue truyền vào tham số event tại input bắt tại sự kiện onChange
onChange={this.handleChangValue}
    - Tạo 2 biến copy từ state 
    - So sánh điều kiện form
    - Set lại state ban đầu

3. Chạy hàm submit với button submit
    - Chặn trình duyệt load lại trang với 
    preventDefault();
    - set điều kiện valid với giá trị nhập vào
    

