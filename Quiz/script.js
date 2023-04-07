const question = [
    {
        'q': 'What is the full form of HTML?',
        'a': 'Hyper Tranfer Making Language',
        'b': 'Hyper Text Tranform Language',
        'c': 'Hyper Text Markup Language',
        'd': 'High Text Markup Language',
        'correct': 'c',
    },
    {
        'q': 'Which of the following numbers comes next in the series? 1, 3, 6, 10, 15, ____',
        'a': '18',
        'b': '21',
        'c': '23',
        'd': '25',
        'correct': 'b'
    },
    {
        'q': 'What does CSS stand for?',
        'a': 'Cascading Style Sheets',
        'b': 'Computer Style Sheets',
        'c': 'Creative Style Sheets',
        'd': 'Colorful Style Sheets',
        'correct': 'a'
    },
    {
        'q': 'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
        'a': '5 minutes',
        'b': '10 minutes',
        'c': '20 minutes',
        'd': '100 minutes',
        'correct': 'a'
    },
    {
        'q': 'What is the full form of JS?',
        'a': 'Junction Script',
        'b': 'Java Script',
        'c': 'Just Scripting',
        'd': 'None of the Above',
        'correct': 'b',
    },
    {
        'q': 'Which of the following words is the odd one out?',
        'a': 'Elephant',
        'b': 'Lion',
        'c': 'Snake',
        'd': 'Leopard',
        'correct': 'a'
    },
    {
        'q': 'What is the full form of PHP?',
        'a': 'Personal Hypertext Processor',
        'b': 'Path to Hypertext Processor',
        'c': 'Hypertext Preprocessor',
        'd': 'All of the above',
        'correct': 'c',
    },
    {
        'q': 'If a book has 300 pages, and it takes John 3 minutes to read 4 pages, how long will it take John to read the entire book?',
        'a': '75 minutes',
        'b': '225 minutes',
        'c': '300 minutes',
        'd': '400 minutes',
        'correct': 'b'
    },

    {
        'q': 'What is the default value of the "position" property in CSS?',
        'a': 'relative',
        'b': 'static',
        'c': 'absolute',
        'd': 'fixed',
        'correct': 'b'
    },

    {
        'q': 'What is the full form of SQL?',
        'a': 'Structured Quote Language',
        'b': 'Sample Query Language',
        'c': 'Structured Query Languge',
        'd': 'Same Query Language',
        'correct': 'c',
    },
    {
        'q': 'Which number should replace the question mark in the following series? 7, 10, 8, 11, 9, 12, ?',
        'a': '7',
        'b': '10',
        'c': '8',
        'd': '11',
        'correct': 'b'
    },
    {
        'q': 'What does the HTML tag <em> do?',
        'a': 'Adds a hyperlink',
        'b': 'Indicates emphasis',
        'c': 'Displays an image',
        'd': 'Creates a line break',
        'correct': 'b'
    },
    {
        'q': 'What is the purpose of the HTML <head> tag?',
        'a': 'Defines the main content of a webpage',
        'b': 'Specifies the page\'s metadata',
        'c': 'Creates a hyperlink',
        'd': 'Displays an image',
        'correct': 'b'
    }, {
        'q': 'If six typists can type six pages in six minutes, how many typists would be needed to type 18 pages in 18 minutes?',
        'a': '6',
        'b': '9',
        'c': '18',
        'd': '27',
        'correct': 'a'
    },
    {
        'q': 'A man buys a horse for $60. He sells the horse for $70. He then buys it back for $80 and sells it again for $90. How much profit did he make?',
        'a': '$10',
        'b': '$20',
        'c': '$30',
        'd': '$40',
        'correct': 'a'
    },
];


let correct_ans;
let user_ans;
let total = question.length;
let index = 0;
let score = 0;

let radio = document.getElementsByClassName('opt');
let que = document.getElementById('quebox');
let opt = document.getElementsByClassName('option');
let done = document.getElementById('done');
let main = document.getElementById('main');

const load = () => {
    const data = question[index];
    que.innerText = index + 1 + ") " + data.q;
    opt[0].innerText = data.a;
    opt[1].innerText = data.b;
    opt[2].innerText = data.c;
    opt[3].innerText = data.d;

    correct_ans = data.correct;


}

done.addEventListener('click', () => {

    if (radio[0].checked || radio[1].checked || radio[2].checked || radio[3].checked) {
        for (i = 0; i < 4; i++) {
            if (radio[i].checked) {
                user_ans = radio[i].value;
            }
        }


        if (index + 1 >= total) {
            if (user_ans == correct_ans) {
                score++;
            }
            end();

        }
        else {
            if (user_ans == correct_ans) {
                score++;
            }
            index++;
            load();
            reset()
        }
    }
    else {
        alert('Please select the option!')
    }
})




const end = () => {
    if (score >= 12) {
        msg = "Outstanding score";
    }
    else if (score >= 10 && score < 12) {
        msg = "Excellent Score";
    }
    else if (score >= 8 && score < 10) {
        msg = "Very good result";
    }
    else if (score >= 6 && score < 8) {
        msg = "Satisfactory Score";
    }
    else if (score >= 4 && score < 6) {
        msg = "Work Hard";
    }
    else {
        msg = "Failed Score";
    }
    let last = document.querySelector('.lasta');
    console.log(last);
    // last.classList.add('main1');
    last.classList.remove('lasta');
    main.classList.add('complete');
    main.style.color = 'black';
    main.innerHTML = "<h1>Thank you for giving this test!!</h1><h2>Your score is " + score + "/" + total + "</h2>" + "<h3>(" + msg + ")";


}

const reset = () => {
    radio[0].checked = false;
    radio[1].checked = false;
    radio[2].checked = false;
    radio[3].checked = false;
}
const refresh = () => {
    window.location.reload();
}


//initial call to the function below
load();

