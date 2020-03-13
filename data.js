let state = {
    showMenu: false,
    soundOn: true,
    strokes: 0,
    setStrokes: () => {},
    score: 0,
    updateScore: () => {},
    setHoleName: () => {}
};

let data = {
    "holeOne": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect class="background" width="1200" height="1200" fill="#C4C4C4"/>
    <rect class="course" x="242" y="458" width="715" height="284" fill="#C4C4C4"/>
    <rect class="hole" x="835" y="580" width="40" height="40" fill="#C4C4C4"/>
    <rect class="mat" x="326" y="566" width="70" height="70" fill="#C4C4C4"/>
    <rect class="ball" x="349" y="589" width="24" height="24" fill="#C4C4C4"/>
    <rect class="wall" x="242" y="408" width="715" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="242" y="742" width="715" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="957" y="458" width="50" height="284" fill="#C4C4C4"/>
    <rect class="wall" x="192" y="458" width="50" height="284" fill="#C4C4C4"/>
    </svg>`,
    "holeTwo": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="1200" fill="#E5E5E5"/>
    <rect class="background" width="1200" height="1200" fill="#C4C4C4"/>
    <rect class="course" x="673" y="322" width="284" height="715" fill="#C4C4C4"/>
    <rect class="course" x="242" y="323" width="715" height="284" fill="#C4C4C4"/>
    <rect class="hole" x="794" y="923" width="41" height="40" fill="#C4C4C4"/>
    <rect class="mat" x="326" y="430" width="71" height="70" fill="#C4C4C4"/>
    <rect class="ball" x="349" y="453" width="23" height="24" fill="#C4C4C4"/>
    <rect class="wedge" x="807" y="322" width="150" height="150" fill="#C4C4C4"/>
    <rect class="wall" x="623" y="607" width="50" height="430" fill="#C4C4C4"/>
    <rect class="wall" x="957" y="322" width="50" height="719" fill="#C4C4C4"/>
    <rect class="wall" x="192" y="322" width="50" height="285" fill="#C4C4C4"/>
    <rect class="wall" x="242" y="607" width="381" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="242" y="272" width="715" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="673" y="1037" width="284" height="50" fill="#C4C4C4"/>
    </svg>`,
    "holeThree": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="1200" fill="#E5E5E5"/>
    <rect class="course" x="242" y="458" width="715" height="284" fill="#C4C4C4"/>
    <rect class="background" width="1200" height="1200" fill="#C4C4C4"/>
    <rect class="mat" x="326" y="566" width="70" height="70" fill="#C4C4C4"/>
    <rect class="hole" x="835" y="580" width="40" height="40" fill="#C4C4C4"/>
    <rect class="ball" x="349" y="589" width="24" height="24" fill="#C4C4C4"/>
    <rect class="rock" x="576" y="567" width="80" height="69" fill="#C4C4C4"/>
    <rect class="wall" x="957" y="458" width="50" height="284" fill="#C4C4C4"/>
    <rect class="wall" x="192" y="458" width="50" height="284" fill="#C4C4C4"/>
    <rect class="wall" x="242" y="408" width="715" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="242" y="742" width="715" height="50" fill="#C4C4C4"/>
    </svg>`,
    "holeFour": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="1200" fill="#E5E5E5"/>
    <rect class="background" width="1200" height="1200" fill="#C4C4C4"/>
    <rect class="wall" x="101" y="213" width="997" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="103" y="976" width="997" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="51" y="263" width="50" height="713" fill="#C4C4C4"/>
    <rect class="wall" x="1098" y="264" width="50" height="713" fill="#C4C4C4"/>
    <rect class="course" x="101" y="263" width="997" height="714" fill="#C4C4C4"/>
    <rect class="wedge-tl" x="103" y="263" width="150" height="150" fill="#C4C4C4"/>
    <rect class="wedge" x="948" y="263" width="150" height="150" fill="#C4C4C4"/>
    <rect class="mat" x="207" y="797" width="70" height="70" fill="#C4C4C4"/>
    <rect class="ball" x="230" y="820" width="24" height="24" fill="#C4C4C4"/>
    <rect class="hole" x="936" y="819" width="40" height="40" fill="#C4C4C4"/>
    <path class="water" d="M822.82 537.128C796.952 448.996 687.82 476.128 599.82 458.128C511.82 440.128 482.82 504.26 387.688 537.128C292.556 569.996 282.82 671.128 299.82 758.128C380.82 907.128 321.415 912.723 384.82 976.128H815.82C879.226 912.723 899.82 847.796 899.82 758.128C899.82 668.46 848.688 625.26 822.82 537.128Z" fill="#8DBCD6" fill-opacity="0.5"/>
    </svg>`,
    "holeFive": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="1200" fill="#E5E5E5"/>
    <rect class="background" width="1200" height="1200" fill="#C4C4C4"/>
    <rect class="course" x="186" y="316" width="358" height="284" fill="#C4C4C4"/>
    <rect class="course" x="723" y="316" width="357" height="284" fill="#C4C4C4"/>
    <rect class="wall" x="186" y="266" width="357" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="723" y="266" width="357" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="186" y="884" width="715" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="544" y="550" width="179" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="901" y="600" width="178" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="136" y="316" width="50" height="568" fill="#C4C4C4"/>
    <rect class="wall" x="901" y="650" width="50" height="244" fill="#C4C4C4"/>
    <rect class="wall" x="544" y="316" width="50" height="234" fill="#C4C4C4"/>
    <rect class="wall" x="673" y="316" width="50" height="234" fill="#C4C4C4"/>
    <rect class="wall" x="1080" y="316" width="50" height="284" fill="#C4C4C4"/>
    <rect class="rock" x="394" y="783" width="80" height="69" fill="#C4C4C4"/>
    <rect class="rock" x="452" y="630" width="80" height="69" fill="#C4C4C4"/>
    <rect class="hole" x="911" y="446" width="40" height="40" fill="#C4C4C4"/>
    <rect class="course" x="186" y="600" width="715" height="284" fill="#C4C4C4"/>
    <rect class="wedge-bl" x="186" y="734" width="151" height="150" fill="#C4C4C4"/>
    <rect class="wedge-tl" x="723" y="316" width="150" height="150" fill="#C4C4C4"/>
    <rect class="ball" x="352" y="454" width="24" height="24" fill="#C4C4C4"/>
    <rect class="mat" x="329" y="431" width="70" height="70" fill="#C4C4C4"/>
    <path class="sand" d="M782 884V797.618C782.991 797.271 783.991 796.898 785 796.5C802.094 789.75 810.518 775.848 818.76 762.247C827.734 747.435 836.494 732.979 856 728.5C867.87 725.774 884.899 727.067 894.237 728.117C898.145 728.557 901 731.895 901 735.828V884H782Z" fill="#D9D7A2"/>
    <path class="sand" d="M576 884V818.054C579.914 817.815 582.607 817.633 583.802 817.549C584.311 817.514 584.744 817.434 585.238 817.303C592.422 815.39 650.495 800.139 689.5 796.5C704.766 795.076 717.757 797.137 730.175 799.108C747.084 801.791 762.928 804.306 782 797.618V884H576Z" fill="#D9D7A2"/>
    <path class="sand" d="M394 884V812.764C402.247 814.685 411.077 816.363 421 817.5C473.307 823.496 550.52 819.604 576 818.054V884H394Z" fill="#D9D7A2"/>
    <path class="sand" d="M394 812.764V884H334.5L254 802C254 802 270.616 795.454 312.5 796.5C336.453 797.098 354.036 801.99 372.277 807.065C379.288 809.015 386.396 810.993 394 812.764Z" fill="#D9D7A2"/>
    <path class="sand" d="M1080 418H961.389C966.218 421.718 971.063 425.982 976 431C992.173 447.436 994.193 473.793 996.03 497.768C998.317 527.615 1000.32 553.772 1029 552.5C1051.16 551.517 1080 527.5 1080 527.5V418Z" fill="#D9D7A2"/>
    <path class="sand" d="M835 354L873 316H1042C1042 316 1070.88 362.318 1080 395.5V418H961.389C946.505 406.538 931.772 400.266 914.936 393.098C906.569 389.535 897.682 385.752 888 381C883.467 378.775 840.376 355.223 835 354Z" fill="#D9D7A2"/>
    </svg>`
};
