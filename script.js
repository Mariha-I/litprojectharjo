document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector('#openOverLay');
    const closeBtn = document.querySelector('#closeOverLay');
    const overlay = document.querySelector('.overlay');
    const homeBtn = document.querySelector('#scrollHome');
    const scrollbarWidth = 


    openBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    homeBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });


    });

});


function displayAnnotation(section, annotation) {
    const sectionDiv = document.getElementById(section);
    sectionDiv.addEventListener('click', function() {
        const sectionText = sectionDiv.innerHTML;
        this.classList.toggle('bold');
        const commentDiv = document.getElementById(annotation);
        
        if (this.classList.contains('bold')) {
            commentDiv.style.display = 'block';
            // Use regular expression to extract the number from 'sec1', 'sec2', etc.
            const sectionNumber = section.match(/\d+/)[0];  // Matches digits after 'sec'
            this.innerHTML = sectionText + `<sup>${sectionNumber}</sup>`;
        } else {
            commentDiv.style.display = 'none';
            this.innerHTML = sectionText.replace(/<sup>\d+<\/sup>$/, '');
        }
    });
}

displayAnnotation('sec1','a1');
displayAnnotation('sec2', 'a2');
displayAnnotation('sec3', 'a3');
displayAnnotation('sec4', 'a4');
displayAnnotation('sec5', 'a5');
displayAnnotation('sec6', 'a6');
displayAnnotation('sec7', 'a7');
displayAnnotation('sec8', 'a8');
displayAnnotation('sec9', 'a9');
displayAnnotation('sec10', 'a10');
displayAnnotation('sec11', 'a11');
displayAnnotation('sec12', 'a12');
displayAnnotation('sec13', 'a13');
displayAnnotation('sec14', 'a14');
displayAnnotation('sec15', 'a15');
displayAnnotation('sec16', 'a16');
displayAnnotation('sec17', 'a17');
displayAnnotation('sec18', 'a18');
displayAnnotation('sec19', 'a19');


