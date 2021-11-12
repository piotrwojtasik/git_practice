


const zodiacSigns = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];

const feature = ["eyebrows", "aesthetic", "voice", "hips", "hair", "lips", "laugh", "eyes", "legs", "cheekbones", "smile", "hands", "short height", "baby face", "innocent face", 
"Amazing hair", "strong eyes", "scary eyes", "athletic body", "cold eyes", "dreamy eyes", "dimples", "perfect nose", "adorable smile", "cute cheeks"];

const lies = ["I am claim and I do not get mad", "I am not jealous", "I do not judge", "I am fine", "I am over it", "I am not stressed", "I am not lying", "I am not obsessed",
"I do not care", "I do not need help", "I am not insecure", "I can walk it alone", ]


// at the end of the string we need to put a zodiac sign
const never = ["Never play an", " Never second guess", "Never try to change a", "Never give false hope to a", "Never challenge a", "Never cheat a", "Never push a", "Never lie to a",
"never restrict a", "never betray a", "never argue with an"]

const button = document.getElementsByClassName("btn");
const random = [zodiacSigns, feature, lies, never]

const mixed = arr => {
    for(let i = 0; i< arr.length; i++){
        const randomNum = Math.floor(Math.random()*10);
        let fSentence = zodiacSigns[randomNum];
        let sSentence = feature[randomNum];
        let tSentence = lies[randomNum];
        let foSentence = never[randomNum];

        const fullSentence = `Peter is drunk but not stupid, your sign is ${fSentence}. Your best feature is ${sSentence} and your most popular lies is "${tSentence}". And remember - ${foSentence} ${fSentence} `

        return fullSentence

    }
}




const btnFunc = () => {
    if(button.click = true){
        document.getElementById("output").innerHTML = mixed(random);
    }
    
}

