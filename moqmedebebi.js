const davalebisInput = document.querySelector(".davalebis-damatebis-forma input");

const damatebisGilaki = document.querySelector(".damatebis-gilaki");

const davalebebisSia = document.querySelector("#davalebebis-sia");

const sulDavalebebi = document.querySelector("#sul-davalebebi");

const dasrulebuliDavalebebi = document.querySelector("#dasrulebuli-davalebebi");

const yvelaDavalebaGilaki = document.querySelector("#yvela-davaleba");

const aqtiuriDavalebaGilaki = document.querySelector("#aqtiuri-davaleba");

const dasrulebuliDavalebaGilaki = document.querySelector("#dasrulebuli-davaleba");

const ganwyobisWerti = document.querySelector(".ganwyobis-werti");

const ganwyobisSmaili = document.querySelector(".ganwyobis-smaili");

const ganwyobisSatauri = document.querySelector(".ganwyobis-satauri");

const dasrulebisXma = new Audio("xmebi/dasruleba.mp3");

const davalebebi = 
    JSON.parse(localStorage.getItem("davalebebi")) || [];

davalebebi.forEach(function (davaleba) {
    const axaliDavaleba = document.createElement("li");

    axaliDavaleba.textContent = davaleba.teqsti;

    if (davaleba.dasrulebulia === true) {
        axaliDavaleba.classList.add("dasrulebuli-davaleba");
    }

    const washlisGilaki = document.createElement("button");
    washlisGilaki.className = "washlis-gilaki";
    washlisGilaki.textContent = "წაშლა";

    washlisGilaki.addEventListener("click", function (event) {
        event.stopPropagation();

        const washlisIndeqsi = davalebebi.indexOf(davaleba);

        davalebebi.splice(washlisIndeqsi, 1);

        sheinaxetDavalebebi();

        ganaxletSulDavalebebi();

        ganaxletDasrulebuliDavalebebi();
        ganaxletGanwyoba();
        
        axaliDavaleba.remove();
    });

    axaliDavaleba.addEventListener("click", function () {
        axaliDavaleba.classList.toggle("dasrulebuli-davaleba");

        davaleba.dasrulebulia =
            !davaleba.dasrulebulia;

        if (davaleba.dasrulebulia === true) {
            daukariiGadaxazvisXma();
        }

        sheinaxetDavalebebi();

        ganaxletDasrulebuliDavalebebi();

        ganaxletGanwyoba();

        if (
            aqtiuriDavalebaGilaki.classList.contains("aqtiuri-filtri") &&
            axaliDavaleba.classList.contains("dasrulebuli-davaleba")
        ) {
            axaliDavaleba.style.display = "none";
        }

        if (
            dasrulebuliDavalebaGilaki.classList.contains("aqtiuri-filtri") &&
            !axaliDavaleba.classList.contains("dasrulebuli-davaleba")
        ) {
            axaliDavaleba.style.display = "none";
        }
    });

    axaliDavaleba.append(washlisGilaki);
    davalebebisSia.append(axaliDavaleba);
});

ganaxletSulDavalebebi();

ganaxletDasrulebuliDavalebebi();

ganaxletGanwyoba();

damatebisGilaki.addEventListener("click", function () {
    if (davalebisInput.value.trim() === "") {
        return;
    }

    const axaliDavaleba = document.createElement("li");

    const axaliDavalebisObieqti = {
        teqsti: davalebisInput.value.trim(),
        dasrulebulia: false
    };

    davalebebi.push(axaliDavalebisObieqti);

    sheinaxetDavalebebi();

    ganaxletSulDavalebebi();

    ganaxletGanwyoba();

    const washlisGilaki = document.createElement("button");
    washlisGilaki.className = "washlis-gilaki";
    washlisGilaki.textContent = "წაშლა";

    washlisGilaki.addEventListener("click", function (event) {
        event.stopPropagation();

        const washlisIndeqsi = davalebebi.indexOf(axaliDavalebisObieqti);

        davalebebi.splice(washlisIndeqsi, 1);

        sheinaxetDavalebebi();

        ganaxletSulDavalebebi();

        ganaxletDasrulebuliDavalebebi();
        ganaxletGanwyoba();

        axaliDavaleba.remove();
    })

    axaliDavaleba.addEventListener("click", function () {
        axaliDavaleba.classList.toggle("dasrulebuli-davaleba");

        axaliDavalebisObieqti.dasrulebulia =
            !axaliDavalebisObieqti.dasrulebulia;

        if (axaliDavalebisObieqti.dasrulebulia === true) {
            daukariiGadaxazvisXma();
        }

        sheinaxetDavalebebi();

        ganaxletDasrulebuliDavalebebi();

        ganaxletGanwyoba();

        if (
            aqtiuriDavalebaGilaki.classList.contains("aqtiuri-filtri") &&
            axaliDavaleba.classList.contains("dasrulebuli-davaleba")
        ) {
            axaliDavaleba.style.display = "none";
        }

        if (
            dasrulebuliDavalebaGilaki.classList.contains("aqtiuri-filtri") &&
            !axaliDavaleba.classList.contains("dasrulebuli-davaleba")
        ) {
            axaliDavaleba.style.display = "none";
        }
    });

    axaliDavaleba.textContent = davalebisInput.value;

    axaliDavaleba.append(washlisGilaki);
    davalebebisSia.append(axaliDavaleba);

    if (
        dasrulebuliDavalebaGilaki.classList.contains("aqtiuri-filtri")
    ) {
        axaliDavaleba.style.display = "none";
    }

    davalebisInput.value = "";
});

function sheinaxetDavalebebi() {
    localStorage.setItem(
        "davalebebi",
        JSON.stringify(davalebebi)
    );
}

function ganaxletSulDavalebebi() {
    sulDavalebebi.textContent = davalebebi.length;
}

function ganaxletDasrulebuliDavalebebi() {
    const dasrulebulebi = davalebebi.filter(function (davaleba) {
        return davaleba.dasrulebulia === true;
    });

    dasrulebuliDavalebebi.textContent = dasrulebulebi.length;

    dasrulebuliDavalebebi.classList.add("statistikis-animacia");

    setTimeout(function () {
        dasrulebuliDavalebebi.classList.remove("statistikis-animacia");
    }, 200);
}
yvelaDavalebaGilaki.addEventListener("click", function () {
    yvelaDavalebaGilaki.classList.add("aqtiuri-filtri");
    aqtiuriDavalebaGilaki.classList.remove("aqtiuri-filtri");
    dasrulebuliDavalebaGilaki.classList.remove("aqtiuri-filtri");

    const yvelaDavalebisElementi =
        document.querySelectorAll("#davalebebis-sia li");

    yvelaDavalebisElementi.forEach(function (davalebisElementi) {
        davalebisElementi.style.display = "";
    });
});
aqtiuriDavalebaGilaki.addEventListener("click", function () {
    yvelaDavalebaGilaki.classList.remove("aqtiuri-filtri");
    aqtiuriDavalebaGilaki.classList.add("aqtiuri-filtri");
    dasrulebuliDavalebaGilaki.classList.remove("aqtiuri-filtri");

    const yvelaDavalebebisElementi =
        document.querySelectorAll("#davalebebis-sia li");

    yvelaDavalebebisElementi.forEach(function (davalebisElementi) {
        if (davalebisElementi.classList.contains("dasrulebuli-davaleba")) {
            davalebisElementi.style.display = "none";
        } else {
            davalebisElementi.style.display = "";
        }
    });
});
dasrulebuliDavalebaGilaki.addEventListener("click", function () {
    yvelaDavalebaGilaki.classList.remove("aqtiuri-filtri");
    aqtiuriDavalebaGilaki.classList.remove("aqtiuri-filtri");
    dasrulebuliDavalebaGilaki.classList.add("aqtiuri-filtri");

    const yvelaDavalebisElementi =
        document.querySelectorAll("#davalebebis-sia li");

    yvelaDavalebisElementi.forEach(function (davalebisElementi) {
        if (davalebisElementi.classList.contains("dasrulebuli-davaleba")) {
            davalebisElementi.style.display = "";
        } else {
            davalebisElementi.style.display = "none";
        }
    });
});

function daukariiGadaxazvisXma() {
    dasrulebisXma.currentTime = 0;

    dasrulebisXma.play();

    setTimeout(function () {
        dasrulebisXma.pause();
        dasrulebisXma.currentTime = 0;
    }, 1000);
}

function ganaxletGanwyoba() {
    if (davalebebi.length === 0) {
        ganwyobisWerti.style.left = "0%";
        shecvaleGanwyobisSmaili("🤔");
        ganwyobisSatauri.textContent = "დაამატე პირველი დავალება!";
        return;
    }

    const dasrulebuli = davalebebi.filter(function (davaleba) {
        return davaleba.dasrulebulia === true;
    });

    const dasrulebisProcenti =
        (dasrulebuli.length / davalebebi.length) * 100;

    if (dasrulebisProcenti === 100) {
        shecvaleGanwyobisSmaili("😄");
        ganwyobisSatauri.textContent = "ყველა დავალება დასრულებულია!";
    } else if (dasrulebisProcenti >= 50) {
        shecvaleGanwyobisSmaili("🙂");
        ganwyobisSatauri.textContent = "კარგად მიდიხარ, გააგრძელე!";
    } else {
        shecvaleGanwyobisSmaili("😟");
        ganwyobisSatauri.textContent = "ჯერ ცოტა გაქვს დასრულებული, გააგრძელე!";
    }

    ganwyobisWerti.style.left = `${dasrulebisProcenti}%`;
}

function shecvaleGanwyobisSmaili(axaliSmaili) {
    if (ganwyobisSmaili.textContent === axaliSmaili) {
        return;
    }
    
    ganwyobisSmaili.classList.add("damaluli-smaili");

    setTimeout(function () {
        ganwyobisSmaili.textContent = axaliSmaili;

        ganwyobisSmaili.classList.remove("damaluli-smaili");
    }, 300);
}