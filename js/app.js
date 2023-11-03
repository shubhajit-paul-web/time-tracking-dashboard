const data = [{
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
];

const bgColors = ["#ff8c66", "#57c2e5", "#ff5c7c", "#4acf81", "#7536d4", "#ffcf57"];
const bgIcons = [
    "icon-work.svg",
    "icon-play.svg",
    "icon-study.svg",
    "icon-exercise.svg",
    "icon-social.svg",
    "icon-self-care.svg"
];

const dashboard = document.querySelector(".dashboard");

data.forEach((elem, index) => {
    dashboard.innerHTML += `
        <div class="box" style="background-image: url(../images/${bgIcons[index]}); background-color: ${bgColors[index]}">
            <div class="box-inner">
                <div class="top-part">
                    <p class="type">${elem.title}</p>
                    <img src="./images/icon-ellipsis.svg" alt="" class="icon-ellipsis" />
                </div>
                <div class="bottom-part">
                    <p class="hours">${elem.timeframes.weekly.current}hrs</p>
                    <p class="last-week">Last week - ${elem.timeframes.weekly.previous}hrs</p>
                </div>
            </div>
        </div>
    `;
});