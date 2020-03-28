let state = {
    showMenu: false,
    soundOn: true,
    strokes: 0,
    setStrokes: () => {},
    score: 0,
    updateScore: () => {},
    setHoleName: () => {},
    showLevelSelect: false,
    par: [0, 1, 2, 1, 2, 2, 2, 3, 2, 3, 3, 2, 0],
    awardStar: (_state, holeNumber) => {
        let cookies = document.cookie;
        if (_state.strokes <= _state.par[holeNumber]) {
            cookies = cookies.split("");
            cookies[holeNumber-1] = "1";
            cookies = cookies.join("");
            document.cookie = cookies;
            return true;
        }
        return false;
    }
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
    </svg>`,
    "holeFive": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="1200" fill="#E5E5E5"/>
    <path class="sand" d="M621 575.5C567 631.5 465 619 465 619V728C465 728 568 676 621 690.5C674 705 749 676 749 676V546C749 546 675 519.5 621 575.5Z" fill="#D9D7A2"/>
    <path class="sand" d="M1180 703H1043C1043 703 926 753 986 798C1046 843 1037 987 1037 987H1180V703Z" fill="#D9D7A2"/>
    <rect class="ball" x="141" y="391" width="24" height="24" fill="#C4C4C4"/>
    <rect class="mat" x="118" y="368" width="70" height="70" fill="#C4C4C4"/>
    <rect class="course" x="34" y="261" width="715" height="284" fill="#C4C4C4"/>
    <rect class="course" x="465" y="545" width="284" height="158" fill="#C4C4C4"/>
    <rect class="hole" x="918" y="825" width="40" height="40" fill="#C4C4C4"/>
    <rect class="course" x="465" y="703" width="715" height="284" fill="#C4C4C4"/>
    <rect class="rock" x="500" y="486" width="80" height="69" fill="#C4C4C4"/>
    <rect class="wedge-bl" x="465" y="837" width="150" height="150" fill="#C4C4C4"/>
    <rect class="wedge" x="600" y="261" width="150" height="150" fill="#C4C4C4"/>
    <rect class="background" width="1200" height="1200" fill="#C4C4C4"/>
    <rect class="wall" x="34" y="211" width="715" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="35" y="545" width="430" height="50" fill="#C4C4C4"/>
    <rect class="wall" y="261" width="34" height="284" fill="#C4C4C4"/>
    <rect class="wall" x="750" y="261" width="50" height="392" fill="#C4C4C4"/>
    <rect class="wall" x="415" y="595" width="50" height="392" fill="#C4C4C4"/>
    <rect class="wall" x="1180" y="703" width="20" height="284" fill="#C4C4C4"/>
    <rect class="wall" x="465" y="987" width="715" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="750" y="653" width="430" height="50" fill="#C4C4C4"/>
    </svg>`,
    "holeSix": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="1200" fill="#E5E5E5"/>
    <path class="sand" d="M584 857.5C548.5 847 532 858 532 858V957H816V858C816 858 798.5 842 761 857.5C723.5 873 702.5 868.5 668.5 857.5C634.5 846.5 619.5 868 584 857.5Z" fill="#D9D7A2"/>
    <path class="water" d="M816 242H532V403C579.5 444.5 612.5 390.5 663.5 394.5C714.5 398.5 796.118 378.341 816 314V242Z" fill="#8DBCD6" fill-opacity="0.5"/>
    <rect class="rock" x="454" y="437" width="80" height="69" fill="#C4C4C4"/>
    <rect class="rock" x="612" y="666" width="80" height="69" fill="#C4C4C4"/>
    <rect class="mat" x="294" y="556" width="70" height="70" fill="#C4C4C4"/>
    <rect class="ball" x="317" y="579" width="24" height="24" fill="#C4C4C4"/>
    <rect class="rock" x="612" y="482" width="80" height="69" fill="#C4C4C4"/>
    <rect class="rock" x="612" y="830" width="80" height="69" fill="#C4C4C4"/>
    <rect class="hole" x="900" y="571" width="40" height="40" fill="#C4C4C4"/>
    <rect class="rock" x="754" y="557" width="80" height="69" fill="#C4C4C4"/>
    <rect class="rock" x="674" y="357" width="80" height="69" fill="#C4C4C4"/>
    <rect class="course" x="166" y="403" width="868" height="376" fill="#C4C4C4"/>
    <rect class="course" x="532" y="242" width="284" height="161" fill="#C4C4C4"/>
    <rect class="course" x="532" y="779" width="284" height="178" fill="#C4C4C4"/>
    <rect class="background" width="1200" height="1200" fill="#C4C4C4"/>
    <rect class="wall" x="532" y="192" width="284" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="532" y="957" width="284" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="166" y="779" width="366" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="166" y="356" width="366" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="116" y="406" width="50" height="373" fill="#C4C4C4"/>
    <rect class="wall" x="1034" y="406" width="50" height="373" fill="#C4C4C4"/>
    <rect class="wall" x="816" y="242" width="50" height="164" fill="#C4C4C4"/>
    <rect class="wall" x="482" y="242" width="50" height="164" fill="#C4C4C4"/>
    <rect class="wall" x="482" y="779" width="50" height="178" fill="#C4C4C4"/>
    <rect class="wall" x="816" y="780" width="50" height="178" fill="#C4C4C4"/>
    <rect class="wall" x="816" y="780" width="218" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="816" y="356" width="218" height="50" fill="#C4C4C4"/>
    </svg>`,
    "holeSeven": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    "holeEight": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="1200" fill="#E5E5E5"/>
    <path class="water" d="M323.5 538.5C245.5 518 116 539 116 539V620H413V904H561H831.5C831.5 904 865.856 787.335 860.5 711.5C855.557 641.509 869.537 578.657 812 538.5C767.292 507.297 734.5 499 673 525.5C611.5 552 577.459 535.706 516 538.5C440.902 541.914 401.5 559 323.5 538.5Z" fill="#8DBCD6" fill-opacity="0.5"/>
    <path class="water" d="M1085 412H892.228C886.216 410.351 879.966 409.111 873.444 407.818C864.504 406.045 855.051 404.171 845 401C786.791 382.638 749.037 378.852 693.566 373.29C686.37 372.569 678.876 371.817 671 371C651.421 368.969 633.794 371.629 617.106 374.148C589.7 378.285 564.826 382.039 538 364C524.701 355.057 508 336 508 336H1085V412Z" fill="#8DBCD6" fill-opacity="0.5"/>
    <path class="water" d="M1085 412H892.228C905.531 415.65 917.667 421.307 929 434C944.491 451.349 943.818 469.872 943.097 489.69C942.562 504.397 942.001 519.817 948 536C961.436 572.244 998 620 998 620H1085V412Z" fill="#8DBCD6" fill-opacity="0.5"/>
    <rect class="ball" x="220" y="463" width="24" height="24" fill="#C4C4C4"/>
    <rect class="mat" x="197" y="440" width="70" height="70" fill="#C4C4C4"/>
    <rect class="hole" x="907" y="769" width="40" height="40" fill="#C4C4C4"/>
    <rect class="course" x="116" y="336" width="969" height="284" fill="#C4C4C4"/>
    <rect class="course" x="413" y="620" width="585" height="284" fill="#C4C4C4"/>
    <rect class="background" width="1200" height="1200" fill="#C4C4C4"/>
    <rect class="wall" x="66" y="336" width="50" height="284" fill="#C4C4C4"/>
    <rect class="wall" x="1085" y="336" width="50" height="284" fill="#C4C4C4"/>
    <rect class="wall" x="998" y="620" width="50" height="284" fill="#C4C4C4"/>
    <rect class="wall" x="363" y="620" width="50" height="284" fill="#C4C4C4"/>
    <rect class="wall" x="116" y="286" width="969" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="116" y="620" width="247" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="1048" y="620" width="37" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="413" y="904" width="585" height="50" fill="#C4C4C4"/>
    </svg>`,
    "holeNine": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="1200" fill="#E5E5E5"/>
    <path class="water" d="M1064.58 522.645C1050.79 376.65 878.848 330.919 827.226 377.507C782.037 418.29 870.725 458.783 827.226 634.904C783.727 811.025 897.535 801.464 940.526 755.408C1053.01 634.904 1078.38 668.639 1064.58 522.645Z" fill="#8DBCD6" fill-opacity="0.5"/>
    <path class="sand" d="M350.361 678.142C257.334 580.968 203.776 626.798 154.616 626.799C105.456 626.799 85.6208 838.173 154.616 824.291C223.611 810.409 199.196 882.084 245.356 854.709C283.276 832.222 443.388 775.315 350.361 678.142Z" fill="#D9D7A2"/>
    <rect class="rock" x="598" y="784" width="80" height="69" fill="#C4C4C4"/>
    <rect class="hole" x="1005" y="342" width="40" height="40" fill="#C4C4C4"/>
    <rect class="rock" x="494" y="749" width="80" height="69" fill="#C4C4C4"/>
    <rect class="ball" x="202" y="723" width="24" height="24" fill="#C4C4C4"/>
    <rect class="mat" x="179" y="700" width="70" height="70" fill="#C4C4C4"/>
    <rect class="wedge-br" x="971" y="727" width="150" height="150" fill="#C4C4C4"/>
    <rect class="course" x="78" y="593" width="1043" height="284" fill="#C4C4C4"/>
    <rect class="course" x="793" y="267" width="328" height="326" fill="#C4C4C4"/>
    <rect class="background" width="1200" height="1200" fill="#C4C4C4"/>
    <rect class="wall" x="793" y="217" width="328" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="743" y="267" width="50" height="276" fill="#C4C4C4"/>
    <rect class="wall" x="1121" y="267" width="50" height="610" fill="#C4C4C4"/>
    <rect class="wall" x="29" y="593" width="50" height="284" fill="#C4C4C4"/>
    <rect class="wall" x="78" y="877" width="1043" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="79" y="543" width="714" height="50" fill="#C4C4C4"/>
    </svg>`,
    "holeTen": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="1200" fill="#E5E5E5"/>
    <rect class="mat" x="161" y="552" width="70" height="70" fill="#C4C4C4"/>
    <rect class="hole" x="1041" y="443" width="40" height="40" fill="#C4C4C4"/>
    <rect class="ball" x="184" y="575" width="24" height="24" fill="#C4C4C4"/>
    <rect class="course" x="621" y="261" width="527" height="172" fill="#C4C4C4"/>
    <rect class="course" x="94" y="501" width="1054" height="172" fill="#C4C4C4"/>
    <rect class="course" x="243" y="827" width="550" height="172" fill="#C4C4C4"/>
    <rect class="course" x="621" y="432" width="172" height="69" fill="#C4C4C4"/>
    <rect class="course" x="976" y="433" width="172" height="68" fill="#C4C4C4"/>
    <rect class="course" x="243" y="672" width="172" height="156" fill="#C4C4C4"/>
    <rect class="course" x="621" y="673" width="172" height="154" fill="#C4C4C4"/>
    <rect class="background" width="1200" height="1200" fill="#C4C4C4"/>
    <rect class="wall" x="571" y="261" width="50" height="240" fill="#C4C4C4"/>
    <rect class="wall" x="621" y="210" width="527" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="795" y="433" width="181" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="795" y="450" width="181" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="94" y="452" width="477" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="94" y="673" width="102" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="466" y="673" width="105" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="466" y="777" width="105" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="246" y="999" width="547" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="844" y="673" width="304" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="193" y="673" width="50" height="326" fill="#C4C4C4"/>
    <rect class="wall" x="571" y="673" width="50" height="155" fill="#C4C4C4"/>
    <rect class="wall" x="416" y="672" width="50" height="155" fill="#C4C4C4"/>
    <rect class="wall" x="44" y="501" width="50" height="172" fill="#C4C4C4"/>
    <rect class="wall" x="1148" y="261" width="50" height="412" fill="#C4C4C4"/>
    <rect class="wall" x="795" y="673" width="50" height="326" fill="#C4C4C4"/>
    <path class="sand" d="M340 787C310.5 808 243 804 243 804V999H462C462 999 523.5 971.5 475 935C426.5 898.5 415 827 415 827V787C415 787 369.5 766 340 787Z" fill="#D9D7A2"/>
    <path class="sand" d="M605 999C605 999 638 912 605 827H621V758C621 758 647.5 716.5 668 758C688.5 799.5 793 785 793 785V999H605Z" fill="#D9D7A2"/>
    <path class="sand" d="M859 261C859 261 916.5 360.5 805 373C693.5 385.5 718.957 499.236 621 445V261H859Z" fill="#D9D7A2"/>
    <path class="sand" d="M1148 261H935C935 261 974.5 321.5 1054 326C1133.5 330.5 1148 394 1148 394V261Z" fill="#D9D7A2"/>
    <path class="water" d="M379.5 590.5C351 549.5 409.5 501 409.5 501H510.5C510.5 501 497 558.5 485.5 597C474 635.5 510 673 510 673H415C415 673 408 631.5 379.5 590.5Z" fill="#8DBCD6" fill-opacity="0.5"/>
    <path class="water" d="M655.222 668.484C627.722 656.984 613 607.53 613 560.03C613 512.53 718 485.53 718 513.03C718 540.53 759 601.53 730 636.03C701 670.53 716.746 723.87 682.722 707.484C665.932 699.397 682.722 679.984 655.222 668.484Z" fill="#8DBCD6" fill-opacity="0.5"/>
    <path class="water" d="M833 581C834.167 549.099 854 502 854 502H893C893 502 889.231 508.254 910 536C922.922 553.263 912.459 613.662 922 633C930.899 651.036 949.5 673.5 949.5 673.5H854C854 673.5 831.646 618.018 833 581Z" fill="#8DBCD6" fill-opacity="0.5"/>
    </svg>`,
    "holeEleven": `<svg width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="1200" fill="#E5E5E5"/>
    <path class="sand" d="M441.5 565.73C462 507.23 288 434.73 288 538.23C288 641.73 288 720.73 338 674.23C388 627.73 421 624.23 441.5 565.73Z" fill="#D9D7A2"/>
    <path class="sand" d="M520.149 850.5C578.649 871 651.149 697 547.649 697C444.149 697 365.149 697 411.649 747C458.149 797 461.649 830 520.149 850.5Z" fill="#D9D7A2"/>
    <path class="sand" d="M861.149 763.5C919.649 784 992.149 610 888.649 610C785.149 610 706.149 610 752.649 660C799.149 710 802.649 743 861.149 763.5Z" fill="#D9D7A2"/>
    <path class="water" d="M856.557 539.722C864.56 456.582 853.886 334.573 788.708 372.203C723.53 409.834 621.039 489.792 706.625 490.031C792.211 490.27 848.555 622.861 856.557 539.722Z" fill="#8DBCD6" fill-opacity="0.5"/>
    <path class="water" d="M676.684 929.495C759.062 915.707 874.151 873.818 820.934 820.601C767.716 767.383 663.956 689.079 685.876 771.81C707.797 854.542 594.306 943.284 676.684 929.495Z" fill="#8DBCD6" fill-opacity="0.5"/>
    <path class="water" d="M599.633 501.508C607.635 418.368 596.962 296.359 531.784 333.989C466.606 371.62 364.114 451.578 449.7 451.817C535.286 452.056 591.631 584.648 599.633 501.508Z" fill="#8DBCD6" fill-opacity="0.5"/>
    <rect class="mat" x="583" y="181" width="70" height="70" fill="#C4C4C4"/>
    <rect class="ball" x="606" y="204" width="24" height="24" fill="#C4C4C4"/>
    <rect class="rock" x="861" y="575" width="80" height="69" fill="#C4C4C4"/>
    <rect class="rock" x="589" y="628" width="80" height="69" fill="#C4C4C4"/>
    <rect class="rock" x="730" y="732" width="80" height="69" fill="#C4C4C4"/>
    <rect class="rock" x="574" y="830" width="80" height="69" fill="#C4C4C4"/>
    <rect class="rock" x="678" y="507" width="80" height="69" fill="#C4C4C4"/>
    <rect class="rock" x="443" y="494" width="80" height="69" fill="#C4C4C4"/>
    <rect class="rock" x="336" y="628" width="80" height="69" fill="#C4C4C4"/>
    <rect class="rock" x="574" y="381" width="80" height="69" fill="#C4C4C4"/>
    <rect class="course" x="518" y="116" width="200" height="199" fill="#C4C4C4"/>
    <rect class="course" x="261" y="315" width="715" height="625" fill="#C4C4C4"/>
    <rect class="course" x="519" y="940" width="199" height="200" fill="#C4C4C4"/>
    <rect class="wedge-tl" x="261" y="316" width="150" height="150" fill="#C4C4C4"/>
    <rect class="wedge" x="826" y="316" width="150" height="150" fill="#C4C4C4"/>
    <rect class="wedge-br" x="826" y="790" width="150" height="150" fill="#C4C4C4"/>
    <rect class="hole" x="598" y="1020" width="40" height="40" fill="#C4C4C4"/>
    <rect class="wedge-bl" x="261" y="790" width="150" height="150" fill="#C4C4C4"/>
    <rect class="background" width="1200" height="1200" fill="#C4C4C4"/>
    <rect class="wall" x="211" y="316" width="50" height="624" fill="#C4C4C4"/>
    <rect class="wall" x="976" y="315" width="50" height="624" fill="#C4C4C4"/>
    <rect class="wall" x="518" y="66" width="200" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="518" y="1140" width="200" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="261" y="940" width="257" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="719" y="940" width="257" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="719" y="265" width="257" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="261" y="265" width="257" height="50" fill="#C4C4C4"/>
    <rect class="wall" x="468" y="116" width="50" height="149" fill="#C4C4C4"/>
    <rect class="wall" x="718" y="116" width="50" height="149" fill="#C4C4C4"/>
    <rect class="wall" x="468" y="991" width="50" height="149" fill="#C4C4C4"/>
    <rect class="wall" x="718" y="991" width="50" height="149" fill="#C4C4C4"/>
    </svg>`,
};
