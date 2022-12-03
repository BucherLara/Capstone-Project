import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <Link href="/">
        {pathname === "/" ? (
          // <p>"Überlebenshilfen für wohnungslose Menschen"</p>
          <HomeSvg
            width="77px"
            height="69px"
            viewBox="0 0 77 69"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>App Icon 1</title>
            <g
              id="221202"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Home"
                transform="translate(-175.000000, -40.000000)"
                fill="#000000"
              >
                <g id="Group-8" transform="translate(50.000000, 40.000000)">
                  <g
                    id="App-Icon-1"
                    transform="translate(125.000000, 0.000000)"
                  >
                    <path
                      d="M67.3087448,36.1629158 C67.1368883,35.9366867 66.946584,35.719196 66.7467321,35.5106056 L47.1547713,15.926736 C46.6201067,15.3919096 45.7590443,15.3919096 45.2337655,15.926736 L42.9410514,18.2105499 C41.799549,19.352214 41.0289459,20.8023137 40.720996,22.4153695 C40.5667782,23.2307976 40.3492876,24.0101392 40.0863245,24.7352699 C40.0775861,24.753556 40.0775861,24.7711947 40.0680385,24.7896426 C38.4915548,29.0129101 35.3921509,30.7068776 33.6792501,31.341549 C33.1900579,31.5229531 32.6552315,31.5229531 32.1747778,31.341549 C31.3138772,31.015313 30.8245232,30.0911395 31.0332754,29.1847665 L33.5345799,18.7180281 C34.0509584,16.8962201 35.0477907,15.2381774 36.4252316,13.933557 L39.4341762,11.0700917 L39.4518149,11.0522911 C50.8249263,-0.320820296 62.8773724,1.3737945 69.2564514,7.75384445 C75.4007247,13.8607365 77.2129851,25.2064997 67.3082593,36.1619449 L67.3087448,36.1629158 Z M64.8169879,42.1073371 C64.191864,42.732461 63.357988,43.076983 62.4788013,43.076983 C62.1710132,43.076983 61.862416,43.0315107 61.5722666,42.9499517 C61.037602,42.795734 60.5395095,42.5062319 60.1406148,42.1073371 L42.9048029,24.8715253 C43.0951073,24.2464014 43.2580634,23.6028297 43.3852567,22.9322334 C43.593847,21.8538422 44.1013253,20.8841963 44.8623808,20.1318793 L46.1943493,18.8000726 L64.8169879,37.4227111 C65.2158826,37.821444 65.506032,38.310798 65.6596024,38.8543629 C65.9863239,40.0143131 65.6689881,41.2652081 64.8176352,42.1078226 L64.8169879,42.1073371 Z M58.2194473,48.7136162 C57.5943234,49.3387401 56.7604473,49.6832621 55.8812607,49.6832621 C55.5734726,49.6832621 55.2648753,49.6377897 54.974726,49.5562307 C54.4400614,49.402013 53.9691553,49.1301497 53.5613603,48.731255 L53.5430742,48.7129689 L37.3413139,32.5014993 C38.8729726,31.486381 40.5310153,29.9369218 41.7819103,27.589835 L58.2199327,44.0375668 C58.6188274,44.4364616 58.9089768,44.9256537 59.0625472,45.4693804 C59.3886214,46.6197831 59.0625472,47.8612923 58.2199327,48.7134544 L58.2194473,48.7136162 Z M51.6225539,55.3111568 C50.9974301,55.9362807 50.163554,56.2808027 49.2843674,56.2808027 C48.9765793,56.2808027 48.667982,56.2353304 48.3778326,56.1537714 C47.8431681,55.9995536 47.3450756,55.7100516 46.9461809,55.3111568 L45.2514043,53.6163802 C44.1186404,52.4836163 42.6413544,51.8944173 41.15533,51.8584925 C41.7804538,49.7471824 41.336734,47.4633685 39.7689888,45.8956233 C38.6090386,44.735673 37.0325549,44.146474 35.3194922,44.2464809 C35.0837155,44.2553812 34.8485861,44.2825675 34.6128093,44.3280399 C34.812014,42.5606045 34.2778349,40.7755304 32.9908533,39.4796485 C31.830903,38.3196983 30.2633196,37.7304993 28.568543,37.8120583 C28.1065371,37.8303443 27.6532697,37.9119033 27.2095499,38.0295489 C27.1911021,36.5074379 26.6114506,34.9846796 25.4516622,33.8247293 C23.1045754,31.4776425 19.2802026,31.4776425 16.9331158,33.8247293 L12.1119108,38.6459343 L11.0335196,37.5675431 C-0.3484921,26.1855314 1.33673694,14.1322762 7.72568717,7.74348775 C13.9243331,1.54484185 25.4599152,-0.231331948 36.5334915,10.0722885 L34.5485654,11.9572076 C32.817864,13.6063501 31.5580687,15.7000214 30.9055967,18.0016358 C30.8966964,18.0199219 30.8966964,18.0375606 30.8966964,18.0560085 L28.3864916,28.5499333 C27.8516653,30.7699887 29.0659882,33.0627029 31.2044846,33.8787783 C31.7569497,34.0873687 32.3372485,34.1959522 32.9264475,34.1959522 C33.5067463,34.1959522 34.0774975,34.0961072 34.6212242,33.8881641 C34.6844971,33.869878 34.738708,33.8426917 34.8026282,33.8155054 L51.6128445,50.6257217 L51.6311306,50.6440077 C52.0204777,51.0429025 52.3018886,51.5138086 52.4561063,52.0575353 C52.7910808,53.2174855 52.4650066,54.4589947 51.6223921,55.310995 L51.6225539,55.3111568 Z M43.3214982,60.2132735 L38.5457656,64.9890062 C37.258784,66.2759878 35.1563742,66.2759878 33.869878,64.9890062 C32.5828964,63.7020245 32.5828964,61.5996147 33.869878,60.3131186 L33.9786234,60.2043733 C34.0058097,60.1771869 34.032996,60.1589009 34.0512821,60.1317145 L38.6821828,55.5008139 C39.9780647,54.2504044 42.0443878,54.2593046 43.3219837,55.5369005 C44.6076707,56.8332679 44.6076707,58.9269392 43.3213364,60.2132735 L43.3214982,60.2132735 Z M27.0728092,58.5913175 C26.4653241,57.9838324 26.1662744,57.1412178 26.2119086,56.2170443 C26.2662813,55.2289505 26.7011008,54.2777525 27.4534178,53.534983 L32.7822629,48.206138 C33.5255178,47.4627212 34.4770395,47.0190014 35.4643242,46.9646288 C35.5274353,46.9646288 35.600094,46.9557285 35.663367,46.9557285 C36.5155291,46.9557285 37.2765846,47.2547781 37.8384355,47.8167909 C39.1254171,49.1037725 38.9529133,51.3782006 37.4579886,52.8731253 L36.7511439,53.5798081 L36.7152191,53.6158947 L32.0843185,58.2467954 C30.589232,59.7056335 28.3510523,59.8598512 27.0728092,58.5911556 L27.0728092,58.5913175 Z M20.4759158,51.9850384 C19.1889342,50.6980568 19.3342516,48.450815 20.8021518,46.9830766 L26.0581764,41.7270521 C26.7920455,40.9931829 27.7257666,40.5671019 28.6954125,40.5216295 L28.867269,40.5216295 C29.7194311,40.5216295 30.4981254,40.8294176 31.0695239,41.4008161 C32.3565055,42.6877977 32.211188,44.9350395 30.7434497,46.4027779 L25.4874252,51.6588024 C24.0101392,53.1273499 21.7622502,53.27202 20.4759158,51.9850384 Z M14.0686796,45.1980025 L13.1079339,46.1587482 L14.0686796,45.1980025 C12.7816979,43.9110209 12.7816979,41.8086111 14.0686796,40.522115 L18.8444122,35.7463824 C20.1313938,34.4594007 22.2338036,34.4594007 23.5202997,35.7463824 C24.8072814,37.033364 24.8072814,39.1357738 23.5202997,40.4222699 L18.7445671,45.1980025 C17.4582328,46.4843369 15.355823,46.4843369 14.0686796,45.1980025 Z M71.1874902,5.81341988 C69.2481984,3.87412808 66.9642228,2.38794184 64.4091929,1.38220932 C61.7543179,0.349290464 58.9356777,-0.112715385 56.0178397,0.0232162834 C49.9462252,0.303818084 43.9108591,3.11371986 38.5004551,8.17879274 C33.090051,3.11291074 27.0551704,0.294917797 20.9830704,0.0232162834 C18.0652324,-0.112715385 15.2376919,0.349290464 12.5917173,1.38220932 C10.0271398,2.37904155 7.75287351,3.87396626 5.81341988,5.81341988 C3.87412808,7.75271168 2.37904155,10.0366874 1.38220932,12.5917173 C0.349290464,15.2465922 -0.112715385,18.0652324 0.0232162834,20.9830704 C0.313365666,27.417493 3.45759461,33.8056342 9.11251384,39.4600679 L10.671197,41.0189129 C10.0188868,43.0941363 10.5169793,45.4501234 12.1573832,47.0905274 C13.3356195,48.2687637 14.8761784,48.8484151 16.4165755,48.8484151 C16.5979795,48.8484151 16.7787363,48.8395148 16.9601403,48.8212288 C16.932954,49.0298192 16.9057677,49.2473098 16.8970292,49.4559002 C16.8154702,51.1506769 17.4045074,52.7182603 18.5646195,53.8782105 C19.6789355,54.9925265 21.1651218,55.5458008 22.6878801,55.5458008 C22.9780295,55.5458008 23.2769173,55.5273529 23.5670667,55.4825278 C23.5398804,55.6639319 23.5215943,55.8446886 23.512694,56.0262545 C23.4223966,57.7393172 24.002048,59.3158009 25.1618365,60.4757511 C26.267414,61.5813287 27.7447,62.1337938 29.266811,62.1337938 C29.5841467,62.1337938 29.9014824,62.1066075 30.2181709,62.0609733 C30.0552147,63.7829362 30.6348662,65.5680103 31.9584199,66.8821783 C33.136818,68.0604146 34.6772151,68.640066 36.2176121,68.640066 C37.7581711,68.640066 39.3081157,68.0510288 40.4768044,66.8821783 L45.252537,62.1064457 C46.2582696,61.1007131 46.8291826,59.8226318 46.9745,58.5091112 C47.1919907,58.5995705 47.4094813,58.6722292 47.626972,58.7355021 C48.1616366,58.8897198 48.7236493,58.9617313 49.2761144,58.9617313 C50.8891702,58.9617313 52.4025428,58.3366074 53.5353067,57.1942959 C54.8222883,55.9073143 55.4474122,54.1133399 55.2660081,52.3282658 C55.4650509,52.3465519 55.664741,52.3554522 55.8733314,52.3554522 C57.486549,52.3554522 58.9997598,51.7303283 60.1325237,50.5880168 C61.4196671,49.3010352 62.0446291,47.5070608 61.8632251,45.7219868 C62.0624297,45.7402728 62.2710201,45.7491731 62.4707102,45.7491731 C64.0839278,45.7491731 65.5971385,45.1240492 66.7299025,43.9817378 C68.080157,42.6314832 68.6963806,40.728278 68.4334175,38.8703834 C73.752715,33.3513958 76.7072869,27.1533972 76.9791502,20.9274032 C77.1061816,18.0095652 76.6530761,15.1909249 75.6106096,12.53605 C74.6200885,10.0271398 73.1251638,7.75222621 71.1857102,5.81277259 L71.1874902,5.81341988 Z"
                      id="Fill-1"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </HomeSvg>
        ) : (
          <PagesSvg
            width="58px"
            height="50px"
            viewBox="0 0 77 69"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>App Icon 1</title>
            <g
              id="221202"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Home"
                transform="translate(-175.000000, -40.000000)"
                fill="#000000"
              >
                <g id="Group-8" transform="translate(50.000000, 40.000000)">
                  <g
                    id="App-Icon-1"
                    transform="translate(125.000000, 0.000000)"
                  >
                    <path
                      d="M67.3087448,36.1629158 C67.1368883,35.9366867 66.946584,35.719196 66.7467321,35.5106056 L47.1547713,15.926736 C46.6201067,15.3919096 45.7590443,15.3919096 45.2337655,15.926736 L42.9410514,18.2105499 C41.799549,19.352214 41.0289459,20.8023137 40.720996,22.4153695 C40.5667782,23.2307976 40.3492876,24.0101392 40.0863245,24.7352699 C40.0775861,24.753556 40.0775861,24.7711947 40.0680385,24.7896426 C38.4915548,29.0129101 35.3921509,30.7068776 33.6792501,31.341549 C33.1900579,31.5229531 32.6552315,31.5229531 32.1747778,31.341549 C31.3138772,31.015313 30.8245232,30.0911395 31.0332754,29.1847665 L33.5345799,18.7180281 C34.0509584,16.8962201 35.0477907,15.2381774 36.4252316,13.933557 L39.4341762,11.0700917 L39.4518149,11.0522911 C50.8249263,-0.320820296 62.8773724,1.3737945 69.2564514,7.75384445 C75.4007247,13.8607365 77.2129851,25.2064997 67.3082593,36.1619449 L67.3087448,36.1629158 Z M64.8169879,42.1073371 C64.191864,42.732461 63.357988,43.076983 62.4788013,43.076983 C62.1710132,43.076983 61.862416,43.0315107 61.5722666,42.9499517 C61.037602,42.795734 60.5395095,42.5062319 60.1406148,42.1073371 L42.9048029,24.8715253 C43.0951073,24.2464014 43.2580634,23.6028297 43.3852567,22.9322334 C43.593847,21.8538422 44.1013253,20.8841963 44.8623808,20.1318793 L46.1943493,18.8000726 L64.8169879,37.4227111 C65.2158826,37.821444 65.506032,38.310798 65.6596024,38.8543629 C65.9863239,40.0143131 65.6689881,41.2652081 64.8176352,42.1078226 L64.8169879,42.1073371 Z M58.2194473,48.7136162 C57.5943234,49.3387401 56.7604473,49.6832621 55.8812607,49.6832621 C55.5734726,49.6832621 55.2648753,49.6377897 54.974726,49.5562307 C54.4400614,49.402013 53.9691553,49.1301497 53.5613603,48.731255 L53.5430742,48.7129689 L37.3413139,32.5014993 C38.8729726,31.486381 40.5310153,29.9369218 41.7819103,27.589835 L58.2199327,44.0375668 C58.6188274,44.4364616 58.9089768,44.9256537 59.0625472,45.4693804 C59.3886214,46.6197831 59.0625472,47.8612923 58.2199327,48.7134544 L58.2194473,48.7136162 Z M51.6225539,55.3111568 C50.9974301,55.9362807 50.163554,56.2808027 49.2843674,56.2808027 C48.9765793,56.2808027 48.667982,56.2353304 48.3778326,56.1537714 C47.8431681,55.9995536 47.3450756,55.7100516 46.9461809,55.3111568 L45.2514043,53.6163802 C44.1186404,52.4836163 42.6413544,51.8944173 41.15533,51.8584925 C41.7804538,49.7471824 41.336734,47.4633685 39.7689888,45.8956233 C38.6090386,44.735673 37.0325549,44.146474 35.3194922,44.2464809 C35.0837155,44.2553812 34.8485861,44.2825675 34.6128093,44.3280399 C34.812014,42.5606045 34.2778349,40.7755304 32.9908533,39.4796485 C31.830903,38.3196983 30.2633196,37.7304993 28.568543,37.8120583 C28.1065371,37.8303443 27.6532697,37.9119033 27.2095499,38.0295489 C27.1911021,36.5074379 26.6114506,34.9846796 25.4516622,33.8247293 C23.1045754,31.4776425 19.2802026,31.4776425 16.9331158,33.8247293 L12.1119108,38.6459343 L11.0335196,37.5675431 C-0.3484921,26.1855314 1.33673694,14.1322762 7.72568717,7.74348775 C13.9243331,1.54484185 25.4599152,-0.231331948 36.5334915,10.0722885 L34.5485654,11.9572076 C32.817864,13.6063501 31.5580687,15.7000214 30.9055967,18.0016358 C30.8966964,18.0199219 30.8966964,18.0375606 30.8966964,18.0560085 L28.3864916,28.5499333 C27.8516653,30.7699887 29.0659882,33.0627029 31.2044846,33.8787783 C31.7569497,34.0873687 32.3372485,34.1959522 32.9264475,34.1959522 C33.5067463,34.1959522 34.0774975,34.0961072 34.6212242,33.8881641 C34.6844971,33.869878 34.738708,33.8426917 34.8026282,33.8155054 L51.6128445,50.6257217 L51.6311306,50.6440077 C52.0204777,51.0429025 52.3018886,51.5138086 52.4561063,52.0575353 C52.7910808,53.2174855 52.4650066,54.4589947 51.6223921,55.310995 L51.6225539,55.3111568 Z M43.3214982,60.2132735 L38.5457656,64.9890062 C37.258784,66.2759878 35.1563742,66.2759878 33.869878,64.9890062 C32.5828964,63.7020245 32.5828964,61.5996147 33.869878,60.3131186 L33.9786234,60.2043733 C34.0058097,60.1771869 34.032996,60.1589009 34.0512821,60.1317145 L38.6821828,55.5008139 C39.9780647,54.2504044 42.0443878,54.2593046 43.3219837,55.5369005 C44.6076707,56.8332679 44.6076707,58.9269392 43.3213364,60.2132735 L43.3214982,60.2132735 Z M27.0728092,58.5913175 C26.4653241,57.9838324 26.1662744,57.1412178 26.2119086,56.2170443 C26.2662813,55.2289505 26.7011008,54.2777525 27.4534178,53.534983 L32.7822629,48.206138 C33.5255178,47.4627212 34.4770395,47.0190014 35.4643242,46.9646288 C35.5274353,46.9646288 35.600094,46.9557285 35.663367,46.9557285 C36.5155291,46.9557285 37.2765846,47.2547781 37.8384355,47.8167909 C39.1254171,49.1037725 38.9529133,51.3782006 37.4579886,52.8731253 L36.7511439,53.5798081 L36.7152191,53.6158947 L32.0843185,58.2467954 C30.589232,59.7056335 28.3510523,59.8598512 27.0728092,58.5911556 L27.0728092,58.5913175 Z M20.4759158,51.9850384 C19.1889342,50.6980568 19.3342516,48.450815 20.8021518,46.9830766 L26.0581764,41.7270521 C26.7920455,40.9931829 27.7257666,40.5671019 28.6954125,40.5216295 L28.867269,40.5216295 C29.7194311,40.5216295 30.4981254,40.8294176 31.0695239,41.4008161 C32.3565055,42.6877977 32.211188,44.9350395 30.7434497,46.4027779 L25.4874252,51.6588024 C24.0101392,53.1273499 21.7622502,53.27202 20.4759158,51.9850384 Z M14.0686796,45.1980025 L13.1079339,46.1587482 L14.0686796,45.1980025 C12.7816979,43.9110209 12.7816979,41.8086111 14.0686796,40.522115 L18.8444122,35.7463824 C20.1313938,34.4594007 22.2338036,34.4594007 23.5202997,35.7463824 C24.8072814,37.033364 24.8072814,39.1357738 23.5202997,40.4222699 L18.7445671,45.1980025 C17.4582328,46.4843369 15.355823,46.4843369 14.0686796,45.1980025 Z M71.1874902,5.81341988 C69.2481984,3.87412808 66.9642228,2.38794184 64.4091929,1.38220932 C61.7543179,0.349290464 58.9356777,-0.112715385 56.0178397,0.0232162834 C49.9462252,0.303818084 43.9108591,3.11371986 38.5004551,8.17879274 C33.090051,3.11291074 27.0551704,0.294917797 20.9830704,0.0232162834 C18.0652324,-0.112715385 15.2376919,0.349290464 12.5917173,1.38220932 C10.0271398,2.37904155 7.75287351,3.87396626 5.81341988,5.81341988 C3.87412808,7.75271168 2.37904155,10.0366874 1.38220932,12.5917173 C0.349290464,15.2465922 -0.112715385,18.0652324 0.0232162834,20.9830704 C0.313365666,27.417493 3.45759461,33.8056342 9.11251384,39.4600679 L10.671197,41.0189129 C10.0188868,43.0941363 10.5169793,45.4501234 12.1573832,47.0905274 C13.3356195,48.2687637 14.8761784,48.8484151 16.4165755,48.8484151 C16.5979795,48.8484151 16.7787363,48.8395148 16.9601403,48.8212288 C16.932954,49.0298192 16.9057677,49.2473098 16.8970292,49.4559002 C16.8154702,51.1506769 17.4045074,52.7182603 18.5646195,53.8782105 C19.6789355,54.9925265 21.1651218,55.5458008 22.6878801,55.5458008 C22.9780295,55.5458008 23.2769173,55.5273529 23.5670667,55.4825278 C23.5398804,55.6639319 23.5215943,55.8446886 23.512694,56.0262545 C23.4223966,57.7393172 24.002048,59.3158009 25.1618365,60.4757511 C26.267414,61.5813287 27.7447,62.1337938 29.266811,62.1337938 C29.5841467,62.1337938 29.9014824,62.1066075 30.2181709,62.0609733 C30.0552147,63.7829362 30.6348662,65.5680103 31.9584199,66.8821783 C33.136818,68.0604146 34.6772151,68.640066 36.2176121,68.640066 C37.7581711,68.640066 39.3081157,68.0510288 40.4768044,66.8821783 L45.252537,62.1064457 C46.2582696,61.1007131 46.8291826,59.8226318 46.9745,58.5091112 C47.1919907,58.5995705 47.4094813,58.6722292 47.626972,58.7355021 C48.1616366,58.8897198 48.7236493,58.9617313 49.2761144,58.9617313 C50.8891702,58.9617313 52.4025428,58.3366074 53.5353067,57.1942959 C54.8222883,55.9073143 55.4474122,54.1133399 55.2660081,52.3282658 C55.4650509,52.3465519 55.664741,52.3554522 55.8733314,52.3554522 C57.486549,52.3554522 58.9997598,51.7303283 60.1325237,50.5880168 C61.4196671,49.3010352 62.0446291,47.5070608 61.8632251,45.7219868 C62.0624297,45.7402728 62.2710201,45.7491731 62.4707102,45.7491731 C64.0839278,45.7491731 65.5971385,45.1240492 66.7299025,43.9817378 C68.080157,42.6314832 68.6963806,40.728278 68.4334175,38.8703834 C73.752715,33.3513958 76.7072869,27.1533972 76.9791502,20.9274032 C77.1061816,18.0095652 76.6530761,15.1909249 75.6106096,12.53605 C74.6200885,10.0271398 73.1251638,7.75222621 71.1857102,5.81277259 L71.1874902,5.81341988 Z"
                      id="Fill-1"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </PagesSvg>
        )}
      </Link>

      <StyledHeading>
        {pathname === "/sleep"
          ? "Unterkünfte"
          : pathname === "/hygiene"
          ? "Duschmöglichkeiten"
          : pathname === "/medicine"
          ? "Medizinische Versorgung"
          : pathname === "/favorites"
          ? "Favoriten"
          : pathname === "/add"
          ? "Neue Einrichtung hinzufügen"
          : "Überlebenshilfen für wohnungslose Menschen"}
      </StyledHeading>

      {pathname !== "/" && pathname !== "/add" ? (
        <Link href="/add">
          <AddSvg
            width="35px"
            height="35px"
            viewBox="0 0 35 35"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>Add</title>
            <g
              id="221202"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Schlafen"
                transform="translate(-365.000000, -105.000000)"
                stroke="#111111"
                stroke-width="1.5"
              >
                <g id="Add" transform="translate(365.000000, 105.000000)">
                  <line
                    x1="6.75694444"
                    y1="17.5"
                    x2="28.2430556"
                    y2="17.5"
                    id="Line-Copy"
                    stroke-linecap="square"
                    transform="translate(17.500000, 17.500000) rotate(90.000000) translate(-17.500000, -17.500000) "
                  ></line>
                  <line
                    x1="6.75694444"
                    y1="17.5"
                    x2="28.2430556"
                    y2="17.5"
                    id="Line"
                    stroke-linecap="square"
                  ></line>
                  <circle id="Oval" cx="17.5" cy="17.5" r="16.75"></circle>
                </g>
              </g>
            </g>
          </AddSvg>
        </Link>
      ) : null}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  color: #111111;
  font-family: "DMSans";
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 39px;
  text-align: center;
  padding-bottom: 10px;
`;
const HomeSvg = styled.svg`
  margin-top: 40px;
`;

const PagesSvg = styled.svg`
  position: absolute;
  left: 20px;
  top: 15px;
  margin-bottom: 40px;
`;

const StyledHeading = styled.h1`
  margin-top: 50px;
`;

const AddSvg = styled.svg`
  position: absolute;
  top: 50px;
  right: 0.1px;
  padding-left: 10px;
`;
