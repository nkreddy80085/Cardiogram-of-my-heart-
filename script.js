window.onload = function() {
    const canvas = document.getElementById('heartCanvas');
    const context = canvas.getContext('2d');
    const button = document.getElementById('showHeartButton');
    canvas.width = 500;
    canvas.height = 500;

    button.addEventListener('click', function() {
        canvas.style.display = 'block';
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.setTransform(1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
        context.lineWidth = 2;
        context.strokeStyle = '#ff6f61';

        // Draw the heart shape
        context.beginPath();
        context.moveTo(0, -50);
        context.bezierCurveTo(75, -100, 100, -50, 0, 50);
        context.bezierCurveTo(-100, -50, -75, -100, 0, -50);
        context.closePath();
        context.stroke();

        // Draw the name "Harshita"
        context.strokeStyle = '#000';
        context.lineWidth = 2;

        // "H"
        context.beginPath();
        context.moveTo(-90, 20);
        context.lineTo(-90, -20);
        context.moveTo(-90, 0);
        context.lineTo(-70, 0);
        context.moveTo(-70, 20);
        context.lineTo(-70, -20);

        // "a"
        context.moveTo(-50, 20);
        context.arc(-60, 20, 10, 0, Math.PI * 2, false);
        context.moveTo(-60, 30);
        context.lineTo(-60, 35);
        context.moveTo(-70, 30);
        context.lineTo(-50, 30);

        // "r"
        context.moveTo(-40, 35);
        context.lineTo(-40, 0);
        context.lineTo(-30, 0);

        // "s"
        context.moveTo(-20, 20);
        context.arc(-20, 20, 10, 0, Math.PI, false);
        context.arc(-20, 30, 10, Math.PI, 0, false);

        // "h"
        context.moveTo(0, 35);
        context.lineTo(0, 0);
        context.arc(0, 20, 10, Math.PI, 0, false);

        // "i"
        context.moveTo(20, 0);
        context.lineTo(20, 35);
        context.moveTo(20, -5);
        context.arc(20, -5, 2, 0, Math.PI * 2, false);

        // "t"
        context.moveTo(40, 35);
        context.lineTo(40, 0);
        context.moveTo(30, 0);
        context.lineTo(50, 0);

        // "a"
        context.moveTo(70, 20);
        context.arc(60, 20, 10, 0, Math.PI * 2, false);
        context.moveTo(60, 30);
        context.lineTo(60, 35);
        context.moveTo(70, 30);
        context.lineTo(50, 30);

        context.stroke();
        context.closePath();
    });
};
