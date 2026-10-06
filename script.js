
// =========================================
// THE HEART MARKET — SCRIPT
// =========================================


// =========================================
// ELEMENTS
// =========================================

const intro = document.getElementById("intro");

const marketStatus = document.querySelector(".market-status");
const loading = document.querySelector(".loading");
const introTitle = document.querySelector(".intro-title");
const introSymbol = document.querySelector(".intro-symbol");

const decision = document.getElementById("decision");

const buyBtn = document.getElementById("buyBtn");
const sellBtn = document.getElementById("sellBtn");
const holdBtn = document.getElementById("holdBtn");

const decisionMessage =
    document.getElementById("decisionMessage");

const tradingChart =
    document.getElementById("tradingChart");

const hiddenSignal =
    document.getElementById("hiddenSignal");

const systemWarning =
    document.getElementById("systemWarning");

const privateData =
    document.getElementById("privateData");

const editingTimeline =
    document.getElementById("editingTimeline");

const recoveredFile =
    document.getElementById("recoveredFile");

const recoverBtn =
    document.getElementById("recoverBtn");

const recoveryMessage =
    document.getElementById("recoveryMessage");


// =========================================
// COUNTDOWN ELEMENTS
// =========================================

const countdownScreen =
    document.getElementById("countdownScreen");

const countHours =
    document.getElementById("countHours");

const countMinutes =
    document.getElementById("countMinutes");

const countSeconds =
    document.getElementById("countSeconds");

const birthdayReveal =
    document.getElementById("birthdayReveal");


// =========================================
// INITIAL STATE
// =========================================

marketStatus.style.opacity = "0";
loading.style.opacity = "0";
introTitle.style.opacity = "0";
introSymbol.style.opacity = "0";


// =========================================
// CINEMATIC INTRO
// =========================================


// 1. PRIVATE MARKET

setTimeout(() => {

    marketStatus.style.transition =
        "opacity 1.2s ease";

    marketStatus.style.opacity = "1";

}, 500);


// 2. INITIALIZING

setTimeout(() => {

    loading.style.transition =
        "opacity 1s ease";

    loading.style.opacity = "1";

}, 1800);


// 3. HIDE INITIALIZING

setTimeout(() => {

    loading.style.transition =
        "opacity 0.8s ease";

    loading.style.opacity = "0";

}, 3800);


// 4. SPECIAL POSITION

setTimeout(() => {

    introTitle.style.transition =
        "opacity 1.5s ease";

    introTitle.style.opacity = "1";

}, 4300);


// 5. HEART

setTimeout(() => {

    introSymbol.style.transition =
        "opacity 1.5s ease";

    introSymbol.style.opacity = "1";

}, 6500);


// =========================================
// TRANSITION TO MARKET DECISION
// =========================================

setTimeout(() => {

    intro.style.transition =
        "opacity 1.5s ease";

    intro.style.opacity = "0";


    setTimeout(() => {

        decision.classList.add("active");

    }, 700);

}, 8000);


// =========================================
// HELPER — BUTTON ANIMATION
// =========================================

function buttonPulse(button) {

    button.style.transform =
        "scale(1.05)";

    setTimeout(() => {

        button.style.transform = "";

    }, 400);

}


// =========================================
// HELPER — REMOVE MARKET EFFECTS
// =========================================

function clearMarketEffects() {

    tradingChart.classList.remove(
        "market-surge",
        "market-drop",
        "market-pause"
    );

}


// =========================================
// BUY
// =========================================

buyBtn.addEventListener("click", () => {

    clearMarketEffects();

    // Market reaction
    tradingChart.classList.add(
        "market-surge"
    );


    // Main decision message
    decisionMessage.textContent =
        "POSITION ACCEPTED... MARKET SIGNAL: UNUSUALLY STRONG ♡";

    decisionMessage.style.color =
        "#55d49a";


    buttonPulse(buyBtn);


    // =====================================
    // STEP 10 — HIDDEN SIGNAL
    // =====================================

    setTimeout(() => {

        hiddenSignal.classList.add(
            "signal-active"
        );

    }, 900);


    // =====================================
    // MARKET ANOMALY
    // =====================================

    setTimeout(() => {

        hiddenSignal.classList.add(
            "signal-anomaly"
        );

    }, 3900);


    // =====================================
    // STEP 12 — SYSTEM WARNING
    // =====================================

    setTimeout(() => {

        systemWarning.classList.add(
            "warning-active"
        );

    }, 5600);


    // =====================================
    // STEP 13 — PRIVATE DATA
    // =====================================

    setTimeout(() => {

        privateData.classList.add(
            "private-data-active"
        );

    }, 7600);


    // =====================================
    // STEP 14 — VIDEO EDITOR
    // =====================================

    setTimeout(() => {

        editingTimeline.classList.add(
            "editing-active"
        );

    }, 9800);


    // =====================================
    // STEP 15 — RECOVERED FILE
    // =====================================

    setTimeout(() => {

        recoveredFile.classList.add(
            "recovered-active"
        );

    }, 12500);

});


// =========================================
// SELL
// =========================================

sellBtn.addEventListener("click", () => {

    clearMarketEffects();

    tradingChart.classList.add(
        "market-drop"
    );


    decisionMessage.textContent =
        "WARNING... SOME POSITIONS ARE NOT MEANT TO BE SOLD.";

    decisionMessage.style.color =
        "#d86b76";


    buttonPulse(sellBtn);

});


// =========================================
// HOLD
// =========================================

holdBtn.addEventListener("click", () => {

    clearMarketEffects();

    tradingChart.classList.add(
        "market-pause"
    );


    decisionMessage.textContent =
        "SIGNAL PAUSED... SOMETHING IS STILL DEVELOPING.";

    decisionMessage.style.color =
        "#d6d9dc";


    buttonPulse(holdBtn);

});


// =========================================
// STEP 15 — FILE RECOVERY
// =========================================

recoverBtn.addEventListener("click", () => {

    // Prevent double clicking
    if (recoverBtn.disabled) {
        return;
    }


    // Start recovery animation
    recoveredFile.classList.add(
        "recovery-running"
    );


    recoverBtn.disabled = true;


    // =====================================
    // RECOVERY STAGE 1
    // =====================================

    recoveryMessage.textContent =
        "SCANNING RECOVERED DATA...";


    // =====================================
    // RECOVERY STAGE 2
    // =====================================

    setTimeout(() => {

        recoveryMessage.textContent =
            "DECRYPTING CLIP_01...";

    }, 1400);


    // =====================================
    // RECOVERY STAGE 3
    // =====================================

    setTimeout(() => {

        recoveryMessage.textContent =
            "RESTORING HIDDEN DATA...";

    }, 2800);


    // =====================================
    // RECOVERY COMPLETE
    // =====================================

    setTimeout(() => {

        recoveryMessage.textContent =
            "RECOVERY COMPLETE";

    }, 4200);


    // =====================================
    // FILE RECOVERED
    // =====================================

    setTimeout(() => {

        recoverBtn.textContent =
            "FILE RECOVERED";

        recoverBtn.style.borderColor =
            "rgba(85, 212, 154, 0.55)";

        recoverBtn.style.color =
            "#55d49a";

    }, 4600);


    // =====================================
    // MOVE TO COUNTDOWN
    // =====================================

    setTimeout(() => {

        showCountdown();

    }, 5200);

});


// =========================================
// SHOW COUNTDOWN SCREEN
// =========================================

function showCountdown() {

    // Make sure countdown starts from 5
    countHours.textContent = "00";
    countMinutes.textContent = "00";
    countSeconds.textContent = "05";


    // Show countdown screen
    countdownScreen.classList.add(
        "countdown-active"
    );


    // Scroll to countdown
    setTimeout(() => {

        countdownScreen.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);


    // Start countdown
    startFiveSecondCountdown();

}


// =========================================
// 5 SECOND COUNTDOWN
// =========================================

function startFiveSecondCountdown() {

    let count = 5;


    // Initial value
    countSeconds.textContent =
        String(count).padStart(2, "0");


    const countdownTimer =
        setInterval(() => {

            count--;


            // =================================
            // SHOW 4 → 3 → 2 → 1 → 0
            // =================================

            if (count >= 0) {

                countSeconds.textContent =
                    String(count).padStart(2, "0");

            }


            // =================================
            // COUNTDOWN FINISHED
            // =================================

            if (count === 0) {

                clearInterval(
                    countdownTimer
                );


                // Small pause at 00
                setTimeout(() => {

                    showBirthdayReveal();

                }, 800);

            }

        }, 1000);

}


// =========================================
// CINEMATIC BIRTHDAY REVEAL
// =========================================

function showBirthdayReveal() {

    // =====================================
    // FADE COUNTDOWN
    // =====================================

    countdownScreen.style.transition =
        "opacity 1.5s ease, transform 1.5s ease";

    countdownScreen.style.opacity =
        "0";

    countdownScreen.style.transform =
        "scale(1.04)";


    // =====================================
    // REVEAL AFTER FADE
    // =====================================

    setTimeout(() => {

        birthdayReveal.classList.add(
            "reveal-active"
        );


        // Scroll to birthday reveal
        birthdayReveal.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


        // Console message
        console.log(
            "❤️ HAPPY BIRTHDAY THANGOO ♾️"
        );

    }, 1500);

}

