import xboxGamePassUltimateImage from "./productsImages/XboxGPU.jpg";
import MineCraftImage from "./productsImages/MCBedRock.jpg";
import psPlusImage from "./productsImages/PSPLUS.webp";
import steamTRImage from "./productsImages/steam_turkey.jpg";
import steamTRCreditImage from "./productsImages/SteamTL.jpg";
import canvaImage from "./productsImages/canva.jpg";
import WWEImage from "./productsImages/WWE_2K22.jpg";
import SOTImage from "./productsImages/Sea_of_Thieves.webp";
import CupheadImage from "./productsImages/CUPheadpackage.png";
import Injustice2Image from "./productsImages/Injustice2Image.webp";
import EuroTrucksim2Image from "./productsImages/Eurotrucksim2.webp";
import CODMW2Image from "./productsImages/COD_MW2.jpg";

const products = [
  {
    id: 1,
    name: "اشتراك اكسبوكس جيم باس التيمت 13 شهر",
    description: "13 شهرًا من بطاقة ألعاب Xbox  حيث يمكنك لعب أكثر من 100 لعبة",
    note: `أن يكون حسابك منتهي/مخلص جميع الإشتراكات وان يكون خطة التجديد التلقائي الشهري مغلقة من اجل استخدام الاشتراك .
    هذه التعليمات مهمة للاستفادة من الإشتراك .. وعدم التزامك بها يعد مشكلة منك .. ونحن بخدمتك على الواتس اب اذا احتجت المساعدة ..
    التفعيل عن طريق دخول الحساب (تقوم بتزويدنا بالحساب وكلمة المرور الخاص بك ونقوم بتفعيل الاشتراك لك)`,
    oldprice: 280.0,
    newprice: 220.0,
    rating: 5,
    onsale: true,
    image: xboxGamePassUltimateImage,
    category: "1",
    platform: "Xbox One , Xbox Series X/S , PC",
  },
  {
    id: 2,
    name: "اشتراك بلايستيشن بلس 365 يوم امريكي",
    description: `Playstation Plus هو النوع الآخر من بطاقات هدايا PS التي يمكنك العثور عليها في مجموعتنا. PS Plus هي خدمة اشتراك توفر للاعبين الكثير من الفوائد. قبل كل شيء ، يتيح لك الوصول إلى اللاعبين المتعددين عبر الإنترنت ، بحيث يمكنك مشاركة المرح مع أصدقائك واللاعبين في جميع أنحاء العالم.

    خصومات PS Store الحصرية ولعبتين مجانيتين شهريًا هي مزايا أخرى جديرة بالذكر. علاوة على ذلك ، هناك مجموعة PlayStation Plus مليئة بأكثر الكتب مبيعًا من Sony والتي يمكن لمشتركي PS Plus الذين يمتلكون PS5 تشغيلها مجانًا. أن نكون صادقين ، القائمة رائعة للغاية. وهي تشمل God of War و Days Gone و Detroit: Become Human و Uncharted 4: A Thief's End والعديد من الألقاب الشهيرة الأخرى. `,
    oldprice: 300.0,
    newprice: 250.0,
    rating: 4,
    onsale: true,
    image: psPlusImage,
    category: "1",
    platform: "PS4 , PS5",
  },

  {
    id: 3,
    name: "حساب ستيم تركيا ",
    description:
      "حسابات Steam التي نبيعها هي مناطق عشوائية في تركيا بشكل افتراضي لذلك ، يرجى عدم استخدام عملتك المحلية لشراء أي شيء على حساب Steam ، وإلا فإننا لن نكون مسؤولين عن الحظر الرسمي الناجم ، آمل أن تتمكن من فهم ذلك ،  شكرًا لك",
    note: "البريد الإلكتروني الأصلي + الوصول الكامل + 0 ألعاب ، اتصل بنا للحصول على بطاقات رصيد تركيا",
    oldprice: 50.0,
    newprice: 40.0,
    rating: 5,
    onsale: true,
    image: steamTRImage,
    category: "2",
    platform: "PC",
  },

  {
    id: 4,
    name: "بطاقات رصيد ستيم تركيا ",
    description: " بطاقات رصيد ستيم تركيا بفئات مختفلة",
    note: "يرجى تحديد الكمية بناءا على الطلب البطاقات من مضاعفات ال50 ليرة .تواصل معنا لتزويدك بالسعر حسب الفئة المطلوبة",
    rating: 5,
    onsale: false,
    image: steamTRCreditImage,
    category: "3",
    platform: "PC",
  },
  {
    id: 5,
    name: "ماين كرافت : جافا و بدروك",
    description:
      "ابتكر ، استكشف ، ابق ، كرر. Minecraft: Java Edition و Bedrock Edition هما الآن صفقة شاملة لنظام Windows. Minecraft: يتيح لك إصدار Java & Bedrock الوصول إلى كلتا اللعبتين في عملية شراء واحدة وقاذفة موحدة واحدة ، مما يجعل الانتقال من إصدار إلى آخر أسهل من أي وقت مضى. العب مع أي لعبة Minecrafter ببساطة عن طريق التبديل إلى الإصدار الذي يمتلكه أصدقاؤك. يمكنك الآن الاستمتاع بضعف التعدين ومضاعفة الصناعة - مع عدد أكبر من Minecrafters أكثر من أي وقت مضى.",
    oldprice: 130.0,
    newprice: 110.0,
    rating: 4,
    onsale: true,
    image: MineCraftImage,
    category: "4",
    platform: "Xbox One , Xbox Series X/S , PC",
  },
  {
    id: 6,
    name: "اشتراك كانفا بريميوم",
    description:
      "كانفا بريميوم هو أحد أفضل مواقع التصميم الرقمي على الإطلاق. يمكنك الوصول إلى أكثر من 60 مليون صورة مجانية وملف موسيقى وفيديو وملفات بي دي إف نتيح لك الوصول للميزات الحصرية المدفوعة عن طريق الاشتراك في كانفا بريميوم بإضافتك لفريق كانفا التعليمي",
    note: "تقوم بتزويدنا ببريدك الالكتروني الخاص لنقوم بإضافتك ل كانفا بريميوم عن طريق canva edu , الاشتراك مضمون لمدة 6 شهور تواصل معنا اذا واجهتك أي مشاكل من تاريخ الشراء",
    oldprice: 35.0,
    newprice: 25.0,
    rating: 5,
    onsale: true,
    image: canvaImage,
    category: "1",
    platform: "PC",
  },
  {
    id: 7,
    name: " دبليو دبليو اي 2022 - ديلوكس اديشن",
    description:
      "  دبليو دبليو اي 2022 ديلوكس للاكسبوكس سيريس اس وو اكس  و الاكسبوكس ون , النسخة الديلوكس تحتوي على كل الاضافات والمحتويات الموجودة في النسخة العادية والمميزة بالاضافة الى الاضافات الجديدة والمحتويات الجديدة الموجودة في النسخة الديلوكس",
    note: " اللعبة تعمل على الاكسبوكس سيريس اس وو اكس  و الاكسبوكس ون, التفعيل عن طريق دخول الحساب (تقوم بتزويدنا بالحساب وكلمة المرور الخاص بك) ",
    oldprice: 300.0,
    newprice: 160.0,
    rating: 5,
    onsale: true,
    image: WWEImage,
    category: "4",
    platform: "Xbox One , Xbox Series X/S",
  },
  {
    id: 8,
    name: "  سي اوف ثيفز - ديلوكس اديشن",
    description:
      "  سي اوف ثيفز ديلوكس للاكسبوكس سيريس اس وو اكس  و الاكسبوكس ون , النسخة الديلوكس تحتوي على كل الاضافات والمحتويات الموجودة في النسخة العادية والمميزة بالاضافة الى الاضافات الجديدة والمحتويات الجديدة الموجودة في النسخة الديلوكس",
    note: " اللعبة تعمل على الاكسبوكس سيريس اس وو اكس  و الاكسبوكس ون, التفعيل عن طريق دخول الحساب (تقوم بتزويدنا بالحساب وكلمة المرور الخاص بك) ",
    oldprice: 180.0,
    newprice: 80.0,
    rating: 5,
    onsale: true,
    image: SOTImage,
    category: "4",
    platform: "Xbox One , Xbox Series X/S , PC",
  },
  {
    id: 9,
    name: "كب هيد - النسخة الكاملة",
    description:
      "كب هيد بكج النسخة الكاملة للاكسبوكس سيريس اس وو اكس  و الاكسبوكس ون , النسخة الكاملة تحتوي على كل الاضافات والمحتويات الموجودة في النسخة العادية والمميزة بالاضافة الى الاضافات الجديدة والمحتويات الجديدة الموجودة في النسخة الكاملة",
    note: " اللعبة تعمل على الاكسبوكس سيريس اس وو اكس  و الاكسبوكس ون, التفعيل عن طريق دخول الحساب (تقوم بتزويدنا بالحساب وكلمة المرور الخاص بك) ",
    oldprice: 200.0,
    newprice: 100.0,
    rating: 5,
    onsale: true,
    image: CupheadImage,
    category: "4",
    platform: "Xbox One , Xbox Series X/S",
  },
  {
    id: 10,
    name: "انجستيس 2 - ليجيندري اديشن",
    description:
      "انجستس 2 - ليجيندري اديشن للاكسبوكس سيريس اس وو اكس  و الاكسبوكس ون , النسخة الليجيندري تحتوي على كل الاضافات والمحتويات الموجودة في النسخة العادية والمميزة بالاضافة الى الاضافات الجديدة والمحتويات الجديدة الموجودة في النسخة الليجيندري",
    note: " اللعبة تعمل على الاكسبوكس سيريس اس وو اكس  و الاكسبوكس ون, التفعيل عن طريق دخول الحساب (تقوم بتزويدنا بالحساب وكلمة المرور الخاص بك) ",
    oldprice: 220.0,
    newprice: 90.0,
    rating: 5,
    onsale: true,
    image: Injustice2Image,
    category: "4",
    platform: "Xbox One , Xbox Series X/S",
  },
  {
    id: 11,
    name: "يورو تراك سيميولاتور 2 ستيم - ستاندرد اديشين",
    description:
      "يورو تراك سيميولاتور 2 ستيم - النسخة العادية , اللعبة تعمل على الحاسب الشخصي , التفعيل عن طريق ارسال الكود الخاص باللعبة",
    note: "اللعبة تعمل على الحاسب الشخصي , التفعيل عن طريق ارسال الكود الخاص باللعبة",
    oldprice: 80.0,
    newprice: 60.0,
    rating: 5,
    onsale: true,
    image: EuroTrucksim2Image,
    category: "4",
    platform: "PC",
  },
  {
    id: 12,
    image: CODMW2Image,
    name: "كول اوف ديوتي مودرن وورفير 2 - كروس جين",
    description:
      "كول اوف ديوتي مودرن وورفير 2 كروس جين للاكسبوكس سيريس اس وو اكس  و الاكسبوكس ون , النسخة الكروس جين تحتوي على نسختين لتعمل على كل من اكسبوكس ون و اكسبوكس سيريس اس و اكس",
    note: " اللعبة تعمل على الاكسبوكس سيريس اس وو اكس  و الاكسبوكس ون, التفعيل عن طريق دخول الحساب (تقوم بتزويدنا بالحساب وكلمة المرور الخاص بك) ",
    oldprice: 260.0,
    newprice: 200.0,
    rating: 5,
    onsale: true,
    category: "4",
    platform: "Xbox One , Xbox Series X/S",
  },
];

export default products;
