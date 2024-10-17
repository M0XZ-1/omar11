let buzzerLocked = false;

// تحميل صوت الجرس
const buzzerSound = document.getElementById('buzzer-sound');

// إضافة الحدث لفريق الأحمر
document.getElementById('red-buzzer').addEventListener('click', function() {
    if (!buzzerLocked) {
        document.getElementById('buzzer-output').textContent = '🔴 فريق الأحمر ضغط الجرس أولاً!';
        buzzerSound.play();  // تشغيل صوت الجرس
        buzzerLocked = true;
    }
});

// إضافة الحدث لفريق الأخضر
document.getElementById('green-buzzer').addEventListener('click', function() {
    if (!buzzerLocked) {
        document.getElementById('buzzer-output').textContent = '🟢 فريق الأخضر ضغط الجرس أولاً!';
        buzzerSound.play();  // تشغيل صوت الجرس
        buzzerLocked = true;
    }
});

// إعادة تهيئة الجرس
document.getElementById('reset-button').addEventListener('click', function() {
    buzzerLocked = false;
    document.getElementById('buzzer-output').textContent = 'لم يتم الضغط على الجرس بعد.';
});

// التحكم في ظهور زر إعادة التهيئة (إخفاؤه للضيوف)
const urlParams = new URLSearchParams(window.location.search);
const isHost = urlParams.get('host');

if (!isHost) {
    document.getElementById('reset-container').style.display = 'none';  // إخفاء زر إعادة التهيئة للضيوف
}
