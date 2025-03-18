$(document).ready(function(){
    var cheats = false;
// Time and Weather
    var minutes = 0;
    var hours = 6;
    var days = 1;
    var weather = "Clear Skies";
    var biome = "NULL";
// Time Based Actions
    var wheatTimer = -1;
    var wheatReady = false;
    var wheatTimer2 = -1;
    var wheatReady2 = false;
    var berriesTimer = -1;
    var berriesReady = false;
    var berriesTimer2 = -1;
    var berriesReady2 = false;
    var applesTimer = -1;
    var applesReady = false;
    var farmSpeed = 1;
    var wheatTimerG = -1;
    var berriesTimerG = -1;
    var greenhouseSpeed = 1;
    var bricksTimer = -1;
    var bricksReady = false;
    var breadTimer = -1;
    var breadReady = false;
    var meatTimer = -1;
    var meatReady = false;
    var charcoalTimer = -1;
    var charcoalReady = false;
    var campfireSpeed = 1;
    var glassTimer = -1;
    var glassReady = false;
    var copperTimer = -1;
    var copperReady = false;
    var annealCopperTimer = -1;
    var annealCopperReady = false;
    var ironTimer = -1;
    var ironReady = false;
    var aluminumTimer = -1;
    var aluminumReady = false;
    var steelTimer = -1;
    var steelReady = false;
    var forgeSpeed = 1;
    var copperWireTimer = -1;
    var copperWireReady = false;
    var annealedCopperWireTimer = -1;
    var annealedCopperWireReady = false;
    var steelPlatesTimer = -1;
    var steelPlatesReady = false;
    var aluminumPlatesTimer = -1;
    var aluminumPlatesReady = false;
    var vaccumTubeTimer = -1;
    var vaccumTubeReady = false;
    var lvChipTimer = -1;
    var lvChipReady = false;
    var metalWorkshopSpeed = 1;
    var crushStoneTimer = -1;
    var crushStoneReady = false;
    var crushStoneTimer2 = -1;
    var crushStoneReady2 = false;
    var crusherSpeed = 1;
// Top Bar Information
    var hunger = 20;
    var maxHunger = 20;
    var health = 20;
    var maxHealth = 20;
    var xp = 0;
    var level = 0;
// Inventory Unlocks
    var forestryUnlocked = false;
    var foodUnlocked = false;
    var miningUnlocked = false;
    var electronicsUnlocked = false;
    var farmUnlocked = false;
// Basic Variables
    var sticks = 1;
    var sand = 0;
    var clay = 0;
    var bricks = 0;
    var salt = 0;
    var sugarCane = 0;
    var sugar = 0;
    var berries = 0;
    var apples = 0;
    var wheat = 0;
    var seeds = 0;
    var bread = 0;
    var wood = 0;
    var meat = 0;
    var cookedMeat = 0;
    var saltedMeat = 0;
    var berryJam = 0;
    var applePie = 0;
    var leather = 0;
    var stone = 0;
    var copperOre = 0;
    var copperIngots = 0;
    var annealedCopperIngots = 0;
    var coal = 0;
    var charcoal = 0;
    var ironOre = 0;
    var ironIngots = 0;
    var steelIngots = 0;
    var aluminumOre = 0;
    var aluminumIngots = 0;
    var glass = 0;
    var copperWire = 0;
    var annealedCopperWire = 0;
    var steelPlates = 0;
    var aluminumPlates = 0;
    var vaccumTubes = 0;
    var lvChips = 0;
    var mvChips = 0;
// Summit
    var summitExploration = 0;
    var summitCheck = false;
    var summitGmultiCost = 1;
    var summitGmultiPower = 1;
    var summitHmultiCost = 1;
    var summitHmultiPower = 1;
    var summitMmultiCost = 1;
    var summitMmultiPower = 1;
    var summitCmultiCost = 1;
    var summitCmultiPower = 1;
// Tools, Buildings, and Stats
    var Gpower = 1;
    var Hpower = 0;
    var Mpower = 0;
    var Cpower = 0;
    var artifact = false;
    var hornOfPlenty = false;
    var miningTool = false;
    var sharpStone = false;
    var pointyStick = false;
    var copperPickaxe = false;
    var ironPickaxe = false;
    var choppingTool = false;
    var stoneAxe = false;
    var copperAxe = false;
    var ironAxe = false;
    var strawBasket = false;
    var copperKnife = false;
    var huntingTool = false;
    var stoneSpear = false;
    var forge = false;
    var metalWorkshop = false;
    var campfire = false;
    var greenhouse = false;
    var crusher = false;
// Upgrades
    var extraWheatPlot = false;
    var extraBerriesPlot = false;
    var forgeAnnealing = false;
    var extraCrusher = false;
// Functions
    (function farmTime(){
        if(wheatTimer > 0){
            wheatTimer --;
            $("#plantWheat").html("Wheat Growing (" + wheatTimer + " ticks left)");
            wheatReady = false;
        }else if(wheatTimer == 0){
            wheatReady = true;
            $("#plantWheat").html("Wheat Ready (Click to harvest)");
        }if(wheatTimer2 > 0){
            wheatTimer2 --;
            $("#plantWheat2").html("Wheat Growing (" + wheatTimer2 + " ticks left)");
            wheatReady2 = false;
        }else if(wheatTimer2 == 0){
            wheatReady2 = true;
            $("#plantWheat2").html("Wheat Ready (Click to harvest)");
        }if(berriesTimer > 0){
            berriesTimer --;
            $("#plantBerries").html("Berries Growing (" + berriesTimer + " ticks left)");
            berriesReady = false;
        }else if(berriesTimer == 0){
            berriesReady = true;
            $("#plantBerries").html("Berries Ready (Click to harvest)");
        }if(berriesTimer2 > 0){
            berriesTimer2 --;
            $("#plantBerries2").html("Berries Growing (" + berriesTimer2 + " ticks left)");
            berriesReady2 = false;
        }else if(berriesTimer2 == 0){
            berriesReady2 = true;
            $("#plantBerries2").html("Berries Ready (Click to harvest)");
        }if(applesTimer > 0){
            applesTimer --;
            $("#plantApples").html("Apples Growing (" + applesTimer + " ticks left)");
            applesReady = false;
        }else if(applesTimer == 0){
            applesReady = true;
            $("#plantApples").html("Apples Ready (Click to harvest)");
        }setTimeout(farmTime, 1000/farmSpeed);
    })();
    (function greenhouseTime(){
        if(wheatTimerG > 0){
            wheatTimerG --;
            $("#plantWheatG").html("Wheat Growing (" + wheatTimerG + " ticks left)");
        }else if(wheatTimerG == 0){
            wheat += 1;
            wheat += randInt(0, 1);
            seeds += randInt(0, 2);
            wheatTimerG = 60;
        }if(berriesTimerG > 0){
            berriesTimerG --;
            $("#plantBerriesG").html("Berries Growing (" + berriesTimerG + " ticks left)");
        }else if(berriesTimerG == 0){
            berries += 2;
            berries += randInt(0, 3);
            berriesTimerG = 120;
        }setTimeout(greenhouseTime, 1000/greenhouseSpeed);
    })();
    (function campfireTime(){
        if(bricksTimer > 0){
            bricksTimer --;
            $("#cookBricks").html("Brick Smelting (" + bricksTimer + " ticks left)");
            bricksReady = false;
        }else if(bricksTimer == 0){
            bricksReady = true;
            $("#cookBricks").html("Brick Ready (Click to collect)");
        }if(breadTimer > 0){
            breadTimer --;
            $("#cookBread").html("Bread Cooking (" + breadTimer + " ticks left)");
            breadReady = false;
        }else if(breadTimer == 0){
            breadReady = true;
            $("#cookBread").html("Bread Ready (Click to collect)");
        }if(meatTimer > 0){
            meatTimer --;
            $("#cookMeat").html("Meat Cooking (" + meatTimer + " ticks left)");
            meatReady = false;
        }else if(meatTimer == 0){
            meatReady = true;
            $("#cookMeat").html("Cooked Meat Ready (Click to collect)");
        }if(charcoalTimer > 0){
            charcoalTimer --;
            $("#cookCharcoal").html("Charcoal Burning (" + charcoalTimer + " ticks left)");
            charcoalReady = false;
        }else if(charcoalTimer == 0){
            charcoalReady = true;
            $("#cookCharcoal").html("Charcoal Ready (Click to collect)");
        }setTimeout(campfireTime, 1000/campfireSpeed);
    })();
    (function forgeTime(){
        if(glassTimer > 0){
            glassTimer --;
            $("#smeltGlass").html("Glass Melting (" + glassTimer + " ticks left)");
            glassReady = false;
        }else if(glassTimer == 0){
            glassReady = true;
            $("#smeltGlass").html("Glass Ready (Click to collect)");
        }if(copperTimer > 0){
            copperTimer --;
            $("#smeltCopper").html("Copper Smelting (" + copperTimer + " ticks left)");
            copperReady = false;
        }else if(copperTimer == 0){
            copperReady = true;
            $("#smeltCopper").html("Copper Ingot Ready (Click to collect)");
        }if(annealCopperTimer > 0){
            annealCopperTimer --
            $("#annealCopper").html("Annealing Copper (" + annealCopperTimer + " ticks left)");
            annealCopperReady = false;
        }else if(annealCopperTimer == 0){
            annealCopperReady = true;
            $("#annealCopper").html("Annealed Copper Ingot Ready (Click to collect)");
        }if(ironTimer > 0){
            ironTimer --;
            $("#smeltIron").html("Iron Smelting (" + ironTimer + " ticks left)");
            ironReady = false;
        }else if(ironTimer == 0){
            ironReady = true;
            $("#smeltIron").html("Iron Ingot Ready (Click to collect)");
        }if(aluminumTimer > 0){
            aluminumTimer --;
            $("#smeltAluminum").html("Aluminum Smelting (" + aluminumTimer + " ticks left");
            aluminumReady = false;
        }else if(aluminumTimer == 0){
            aluminumReady = true;
            $("#smeltAluminum").html("Aluminum Ingot Ready (Click to collect)");
        }if(steelTimer > 0){
            steelTimer --;
            $("#smeltSteel").html("Steel Forging (" + steelTimer + " ticks left)");
            steelReady = false;
        }else if(steelTimer == 0){
            steelReady = true;
            $("#smeltSteel").html("Steel Ingot Ready (Click to collect)");
        }
        setTimeout(forgeTime, 1000/forgeSpeed);
    })();
    (function metalWorkshopTime(){
        if(copperWireTimer > 0){
            copperWireTimer --;
            $("#millCopper").html("Copper Milling (" + copperWireTimer + " ticks left)");
            copperWireReady = false;
        }else if(copperWireTimer == 0){
            copperWireReady = true;
            $("#millCopper").html("Copper Wire Ready (Click to collect)");
        }if(annealedCopperWireTimer > 0){
            annealedCopperWireTimer --;
            $("#millAnnealedCopper").html("Annealed Copper Milling (" + annealedCopperWireTimer + " ticks left)");
            annealedCopperWireReady = false;
        }else if(annealedCopperWireTimer == 0){
            annealedCopperWireReady = true;
            $("#millAnnealedCopper").html("Annealed Copper Wire Ready (Click to collect)");
        }if(steelPlatesTimer > 0){
            steelPlatesTimer --;
            $("#pressSteel").html("Steel Pressing (" + steelPlatesTimer + " ticks left)");
            steelPlatesReady = false;
        }else if(steelPlatesTimer == 0){
            steelPlatesReady = true;
            $("#pressSteel").html("Steel Plate Ready (Click to collect)");
        }if(aluminumPlatesTimer > 0){
            aluminumPlatesTimer --;
            $("#pressAluminum").html("Aluminum Pressing (" + aluminumPlatesTimer + " ticks left)");
            aluminumPlatesReady = false;
        }else if(aluminumPlatesTimer == 0){
            aluminumPlatesReady = true;
            $("#pressAluminum").html("Aluminum Plate Ready (Click to collect)");
        }if(vaccumTubeTimer > 0){
            vaccumTubeTimer --;
            $("#assembleVaccumTube").html("Assembling Vaccum Tube (" + vaccumTubeTimer + " ticks left)");
            vaccumTubeReady = false;
        }else if(vaccumTubeTimer == 0){
            vaccumTubeReady = true;
            $("#assembleVaccumTube").html("Vaccum Tube Ready (Click to collect)");
        }if(lvChipTimer > 0){
            lvChipTimer --;
            $("#assembleLVChip").html("Assembling LV Chip (" + lvChipTimer + " ticks left)");
            lvChipReady = false;
        }else if(lvChipTimer == 0){
            lvChipReady = true;
            $("#assembleLVChip").html("LV Chip Ready (Click to collect)");
        }setTimeout(metalWorkshopTime, 1000/metalWorkshopSpeed);
    })();
    (function crusherTime(){
        if(crushStoneTimer > 0){
            crushStoneTimer --;
            $("#crushStone").html("Crushing Stone (" + crushStoneTimer + " ticks left)");
            crushStoneReady = false;
        }else if(crushStoneTimer == 0){
            crushStoneReady = true;
            $("#crushStone").html("Crushed Stone Ready (Click to collect)");
        }if(crushStoneTimer2 > 0){
            crushStoneTimer2 --;
            $("#crushStone2").html("Crushing Stone (" + crushStoneTimer2 + " ticks left)");
            crushStoneReady2 = false;
        }else if(crushStoneTimer2 == 0){
            crushStoneReady2 = true;
            $("#crushStone2").html("Crushed Stone Ready (Click to collect)");
        }setTimeout(crusherTime, 1000/crusherSpeed);
    })();
    
    setInterval(function(){
        if(cheats == true){
            $("#Title").css("color", "red");
            $("#Title").html("Mekanisms - Cheats Enabled");
        }
        // Update Game Time
        minutes += 1;
        if(health < maxHealth && hunger > maxHunger){
                updateHealth(-1);
                updateHunger(1);
            }
        if(minutes >= 60){
            minutes = 0;
            hours ++;
            if (health < maxHealth) updateHealth(-1);
        }
        if(hours >= 24){
            hours = 0;
            days ++;
            randWeather = randInt(0, 2);
            randWeatherEvent = randInt(0, 2)
            if(randWeather == 0){
                if(weather == "Clear Skies"){
                    weather = "Light Rain";
                }else if(weather == "Light Rain"){
                    weather = "Rain";
                }else if(weather == "Rain"){
                    weather = "Storm";
                }else if(weather == "Storm" && randWeatherEvent == 0){
                    weather = "Tornado";
                }else if(weather == "Storm" && biome == "Desert" && randWeatherEvent == 1){
                    weather = "Drought";
                }else if(weather == "Storm" && biome == "Tundra" && randWeatherEvent == 1){
                    weather = "Blizard";
                }
            }else if(randWeather == 1){
                if(weather == "Light Rain"){
                    weather = "Clear Skies";
                }else if(weather == "Rain"){
                    weather = "Light Rain";
                }else if(weather == "Storm"){
                    weather = "Rain";
                }else if(weather == "Tornado" || weather == "Drought" || weather == "Blizard"){
                    weather = "Storm";
                } 
            }
        }
        if(minutes < 10){
            $("#time").html(biome + ", " + weather + ", Day: " + days + ", " + hours + ":" + "0" + minutes);
        }else{
            if(hours < 10){
                $("#time").html(biome + ", " + weather + ", Day: " + days + ", " + "0" + hours + ":" + minutes);
            }else{
                $("#time").html(biome + ", " + weather + ", Day: " + days + ", " + hours + ":" + minutes);
            }
        }
        changeInventory();
        changeMarket();
        save();
    }, 1000);
    
    function updateHunger(Amount){
        hunger -= Amount;
        if(hunger < 1){
            if(artifact == true && (berries > 0 || berryJam > 0 || apples > 0 || bread > 0 || cookedMeat > 0 || saltedMeat > 0 || applePie > 0)){
                if(berries > 0){
                    berries --;
                    updateHunger(-1);
                }else if(apples > 0){
                    apples --;
                    updateHunger(-2);
                }else if(bread > 0){
                    bread --;
                    updateHunger(-5);
                }else if(berryJam > 0){
                    berryJam --;
                    updateHunger(-3);
                }else if(cookedMeat > 0){
                    cookedMeat --;
                    updateHunger(-7);
                }else if(saltedMeat > 0){
                    saltedMeat --;
                    updateHunger(-10);
                }else if(applePie > 0){
                    applePie --;
                    updateHunger(-15);
                }
            }else{
                $(".content").children().css("display", "none");
                $(".dead").css("display", "block");
            }
        }else{
            if(hunger <= 5){
                $(".vignette").css("display", "block");
            }else{
                $(".vignette").css("display", "none");
            }
            $("#blab").html("Hunger: " + hunger + "/" + maxHunger)
            O = hunger * (100/maxHunger)
            if(O > 100){
                $("#hunger-bar").css("width", "100%");
                $("#hunger-bar").css("background-color", "lightBlue");
            }else{
                $("#hunger-bar").css("width", O.toString() + "%");
                $("#hunger-bar").css("background-color", "green");
            }
        }
    }

    function updateHealth(Amount){
        health -= Amount
        if(health < 1){
            $(".content").children().css("display", "none");
            $(".dead").css("display", "block");
        }
            $("#health").html("Health: " + health + "/" + maxHealth)
            I = health * (100/maxHealth)
            if(I > 100){
            $("#health-bar").css("width", "100%");
            $("#health-bar").css("background-color", "gold");
        }else{
            $("#health-bar").css("width", I.toString() + "%");
            $("#health-bar").css("background-color", "red");
        }
    }

    function updateXp(Amount){
        xp = xp + Amount;
        if(level != 0){
            xpRequired = 100 * Math.pow(level, 1.1)
        }else{
            xpRequired = 100
        }
        if(xp >= xpRequired){
            xp = 0;
            level ++;
            maxHunger += 10;
            maxHealth += 5;
        }
        $("#xp").html("Level: " + level);
        P = xp * (100/xpRequired);
        $("#xp-bar").css("width", P.toString() + "%");
    }

    function fuelAmt(){
        return charcoal + coal;
    };
    function subtractFuel(amt){
        if(amt < charcoal){
            charcoal -= amt;
        }else{
            amt -= charcoal;
            charcoal -= charcoal;
            coal -= amt;

        }
    };
    
    function randInt(Low, High){
        return Math.floor(Math.random() * (High - Low + 1)) + Low;
    }
    function OneInX(X){
        if(randInt(0, X) == 0){
            return 1;
        }else{
            return 0;
        }
    }
    function randomBiome(){
        randBiome = randInt(0, 5)
        if(randBiome == 0){
            biome = "Forest"
        }else if(randBiome == 1){
            biome = "Desert"
        }else if(randBiome == 2){
            biome = "Beach"
        }else if(randBiome == 3){
            biome = "Tundra"
        }else if(randBiome == 4){
            biome = "Plains"
        }else if(randBiome == 5){
            biome = "Jungle"
        }
    }
    if(biome == "NULL"){
        randomBiome();
    }

    $("#gather").click(function(){
        if(health > 1){
            updateXp(Gpower);
            updateHunger(2);
            updateHealth(1);
            $(".flexInvF").fadeIn(1000);
            forestryUnlocked = true;
            $(".hide").fadeIn(1000);
            if(hours <= 6){
                Gmulti = 1;
            }else if(hours <= 20){
                Gmulti = 1.2
            }else{
                Gmulti = 0.9
            }
            if(weather == "Clear Skies"){
                Gmulti = Gmulti * 1
            }else if(weather == "Light Rain"){
                Gmulti = Gmulti * 0.9
            }else if(weather == "Rain"){
                Gmulti = Gmulti * 0.8
            }else if(weather == "Storm"){
                Gmulti = Gmulti * 0.7
            }else if(weather == "Tornado"){
                Gmulti = Gmulti * 0.5
            }
            if(biome == "Forest"){
                Gmulti = Gmulti * 0.9
            }else if(biome == "Desert"){
                Gmulti = Gmulti * 0.9
            }else if(biome == "Tundra"){
                Gmulti = Gmulti * 1
            }else if(biome == "Plains"){
                Gmulti = Gmulti * 1
            }else if(biome == "Beach"){
                Gmulti = Gmulti * 1.3
            }else if(biome == "Jungle"){
                Gmulti = Gmulti * 1.1
            }
            Gmulti = Gmulti * summitGmultiPower;
            for (let i = 0; i < randInt(Gpower, Math.round(Gpower * Gmulti)); i++){
                var Grandom = randInt(0, 6)
                if(Grandom == 0){
                    if(biome == "Forest" || biome == "Tundra"){
                        sticks += randInt(1, 3);
                    }else{
                        sticks ++;
                    }
                }
                else if(Grandom == 1){
                    sand ++;
                }
                else if(Grandom == 2){
                    clay ++;
                }
                else if(Grandom == 3){
                    berries += randInt(1, 2);
                    $(".flexInvC").fadeIn(1000);
                    $("#farm").fadeIn(1000);
                    foodUnlocked = true;
                    farmUnlocked = true;
                }
                else if(Grandom == 4){
                    apples += randInt(1, 2);
                    $(".flexInvC").fadeIn(1000);
                    $("#farm").fadeIn(1000);
                    foodUnlocked = true;
                    farmUnlocked = true;
                }
                else if(Grandom == 5){
                    wheat ++;
                    seeds ++;
                    $(".flexInvC").fadeIn(1000);
                    $("#farm").fadeIn(1000);
                    foodUnlocked = true;
                    farmUnlocked = true;
                }
                else if(Grandom == 6){
                    sugarCane ++;
                    $("#farm").fadeIn(1000);
                    farmUnlocked = true;
                }
                else{
                    console.log("Error: Gathering Function")
                }
            }
            changeInventory();
            changeMarket();
        }
    });

    $("#mine").click(function(){
        if(health > 5){
            updateXp(Mpower);
            updateHunger(4);
            updateHealth(5);
            $(".flexInvM").fadeIn(1000);
            miningUnlocked = true;
            if(hours <= 6){
                Mmulti = 1;
            }else if(hours <= 20){
                Mmulti = 1.2
            }else{
                Mmulti = 0.9
            }
            if(weather == "Clear Skies"){
                Mmulti = Mmulti * 1
            }else if(weather == "Light Rain"){
                Mmulti = Mmulti * 1.1
            }else if(weather == "Rain"){
                Mmulti = Mmulti * 1.2
            }else if(weather == "Storm"){
                Mmulti = Mmulti * 1.3
            }else if(weather == "Tornado"){
                Mmulti = Mmulti * 0.7
            }
            if(biome == "Forest"){
                Mmulti = Mmulti * 0.7
            }else if(biome == "Desert"){
                Mmulti = Mmulti * 1.5
            }else if(biome == "Tundra"){
                Mmulti = Mmulti * 0.8
            }else if(biome == "Plains"){
                Mmulti = Mmulti * 1
            }else if(biome == "Beach"){
                Mmulti = Mmulti * 0.8
            }else if(biome == "Jungle"){
                Mmulti = Mmulti * 0.8
            }
            Mmulti = Mmulti * summitMmultiPower;
            for (let i = 0; i < Mpower * Mmulti; i++){
                if(Mpower == 1){
                    var Mrandom = randInt(0, 1)
                }
                else if(Mpower == 2){
                    var Mrandom = randInt(0, 2)
                }
                else if(Mpower == 3){
                    var Mrandom = randInt(0, 5)
                }
                else{
                    var Mrandom = randInt(0, 5)
                }
                if(Mrandom == 1){
                    stone ++;
                }
                else if(Mrandom == 2){
                    copperOre ++;
                }
                else if(Mrandom == 3){
                    coal += randInt(1, 3);
                }
                else if(Mrandom == 4){
                    ironOre ++;
                }
                else if(Mrandom == 5){
                    salt ++;
                }
                else if(Mrandom == 0){
                    // Womp Womp
                }
                else{
                    console.log("Error: Mining Function");
                }
            }
            changeInventory();
        }
    });
    
    $("#chop").click(function(){
        if(health > 1){
            updateXp(Cpower);
            updateHunger(5);
            updateHealth(1);
            if(hours <= 6){
                Cmulti = 1;
            }else if(hours <= 20){
                Cmulti = 1.2;
            }else{
                Cmulti = 0.9;
            }
            if(weather == "Clear Skies"){
                Cmulti = Cmulti * 1;
            }else if(weather == "Light Rain"){
                Cmulti = Cmulti * 0.9;
            }else if(weather == "Rain"){
                Cmulti = Cmulti * 0.8;
            }else if(weather == "Storm"){
                Cmulti = Cmulti * 0.6;
            }else if(weather == "Tornado"){
                Cmulti = Cmulti * 0.5;
            }
            if(biome == "Forest"){
                Cmulti = Cmulti * 1.4;
            }else if(biome == "Desert"){
                Cmulti = Cmulti * 0.6;
            }else if(biome == "Tundra"){
                Cmulti = Cmulti * 1.2;
            }else if(biome == "Plains"){
                Cmulti = Cmulti * 1;
            }else if(biome == "Beach"){
                Cmulti = Cmulti * 1;
            }else if(biome == "Jungle"){
                Cmulti = Cmulti * 1.6;
            }
            Cmulti = Cmulti * summitCmultiPower;
            wood += Math.ceil(randInt(0, Cpower) * Cmulti);
            if(OneInX(1) == 1){
                sticks ++;
            }
            changeInventory();
            changeMarket();
        }
    });

    $("#hunt").click(function(){
        if(health > 7){
            updateXp(Hpower);
            updateHunger(2);
            updateHealth(7);
            if(hours <= 6){
                Hmulti = 1;
            }else if(hours <= 20){
                Hmulti = 1.2
            }else{
                Hmulti = 0.9
            }
            if(weather == "Clear Skies"){
                Hmulti = Hmulti * 1.2;
            }else if(weather == "Light Rain"){
                Hmulti = Hmulti * 1.1;
            }else if(weather == "Rain"){
                Hmulti = Hmulti * 1;
            }else if(weather == "Storm"){
                Hmulti = Hmulti * 0.8;
            }else if(weather == "Tornado"){
                Hmulti = Hmulti * 0.5;
            }
            if(biome == "Forest"){
                Hmulti = Hmulti * 1.2;
            }else if(biome == "Desert"){
                Hmulti = Hmulti * 0.8;
            }else if(biome == "Tundra"){
                Hmulti = Hmulti * 1.1;
            }else if(biome == "Plains"){
                Hmulti = Hmulti * 1.3;
            }else if(biome == "Beach"){
                Hmulti = Hmulti * 1;
            }else if(biome == "Jungle"){
                Hmulti = Hmulti * 0.7;
            }
            Hmulti = Hmulti * summitHmultiPower;
            meat += Math.round(randInt(0, Hpower) * Hmulti);
            if(meat > 0){
                $(".flexInvC").fadeIn(1000);
                foodUnlocked = true;
            };
            if(OneInX(1) == 1){
                leather ++;
            }
            changeInventory();
            changeMarket();
        }
    });

    $("#eatSalt").click(function(){
        salt --;
        updateHunger(-1);
        changeInventory();
        changeMarket();
    });
    $("#eatBerries").click(function(){
        berries --;
        updateHunger(-2);
        updateHealth(-1);
        changeInventory();
        changeMarket();
    });
    $("#eatBerryJam").click(function(){
        berryJam --;
        updateHunger(-12);
        updateHealth(-6);
        changeInventory();
        changeMarket();
    });
    $("#eatApple").click(function(){
        apples --;
        updateHunger(-5);
        updateHealth(-3);
        changeInventory();
        changeMarket();
    });
    $("#eatBread").click(function(){
        bread --;
        updateHunger(-10);
        updateHealth(-5);
        changeInventory();
        changeMarket();
    });
    $("#eatCookedMeat").click(function(){
        cookedMeat --;
        updateHunger(-15);
        updateHealth(-8);
        changeInventory();
        changeMarket();
    });
    $("#eatSaltedMeat").click(function(){
        saltedMeat --;
        updateHunger(-20);
        updateHealth(-10);
        changeInventory();
        changeMarket();
    });
    $("#eatApplePie").click(function(){
        applePie --;
        updateHunger(-30);
        updateHealth(-15);
        changeInventory();
        changeMarket();
    });
    
    
    
    // Crop Plots //
    
    
    
    $("#plantWheat").click(function(){
        if(wheatReady == true){
            wheat += 1;
            wheat += randInt(0, 1);
            seeds += randInt(0, 2);
            wheatReady = false;
            wheatTimer = -1;
            $("#plantWheat").html("Plant Wheat (1 Hour)");
        }else if(wheatTimer == -1){
            seeds -= 1;
            wheatTimer = 60;
            wheatReady = false;
            $("#plantWheat").html("Wheat Growing (1 hour)");
        }
        changeInventory();
        changeMarket();
    });
    $("#plantWheat2").click(function(){
        if(wheatReady2 == true){
            wheat += 1;
            wheat += randInt(0, 1);
            seeds += randInt(0, 2);
            wheatReady2 = false;
            wheatTimer2 = -1;
            $("#plantWheat2").html("Plant Wheat (1 Hour)");
        }else if(wheatTimer2 == -1){
            seeds -= 1;
            wheatTimer2 = 60;
            wheatReady2 = false;
            $("#plantWheat2").html("Wheat Growing (1 hour)");
        }
        changeInventory();
        changeMarket();
    });
    $("#plantWheatG").click(function(){
        seeds -= 1;
        wheatTimerG = 60;
        $("#plantWheatG").html("Wheat Growing (60 ticks left)");
        changeInventory();
        changeMarket();
    });
    $("#plantBerries").click(function(){
        if(berriesReady == true){
            berries += 2;
            berries += randInt(0, 3);
            berriesReady = false;
            berriesTimer = -1;
            $("#plantBerries").html("Plant Berries (120 Ticks)");
        }else if(berriesTimer == -1){
            berries -= 1;
            berriesTimer = 120;
            berriesReady = false;
            $("#plantBerries").html("Berries Growing (120 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    $("#plantBerries2").click(function(){
        if(berriesReady2 == true){
            berries += 2;
            berries += randInt(0, 3);
            berriesReady2 = false;
            berriesTimer2 = -1;
            $("#plantBerries2").html("Plant Berries (2 Hours)");
        }else if(berriesTimer2 == -1){
            berries -= 1;
            berriesTimer2 = 120;
            berriesReady2 = false;
            $("#plantBerries2").html("Berries Growing (120 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    $("#plantBerriesG").click(function(){
        berries -= 1;
        berriesTimerG = 120;
        $("#plantBerriesG").html("Berries Growing (120 ticks left)");
        changeInventory();
        changeMarket();
    });
    $("#plantApples").click(function(){
        if(applesReady == true){
            apples += 2;
            apples += randInt(0, 1);
            applesReady = false;
            applesTimer = -1;
            $("#plantApples").html("Plant Apples (5 Hours)");
        }else if(applesTimer == -1){
            apples -= 1;
            applesTimer = 300;
            applesReady = false;
            $("#plantApples").html("Apples Growing (300 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    
    
    // Tools //
    
    
    
    $("#craftHornOfPlenty").click(function(){
        bread -= 2;
        stone -= 5;
        copperIngots -= 1;
        hornOfPlenty = true;
        artifact = true;
        changeInventory();
        changeMarket();
    });

    $("#pointyStick").click(function(){
        $(".flexInvT").fadeIn(1000);
        sticks -= 2;
        Mpower = 1;
        pointyStick = true;
        miningTool = true;
        $("#mine").css("display", "inline");
        changeInventory();
        changeMarket();
    });

    $("#sharpStone").click(function(){
        stone -= 2;
        Mpower = 2;
        sharpStone = true;
        miningTool = true;
        changeInventory();
        changeMarket();
    });
    
    $("#copperPickaxe").click(function(){
        copperIngots -= 4;
        sticks -= 3;
        Mpower = 3;
        copperPickaxe = true;
        changeInventory();
        changeMarket();
    });
    
    $("#ironPickaxe").click(function(){
        ironIngots -= 6;
        sticks -= 4;
        wood -= 3;
        Mpower = 4;
        ironPickaxe = true;
        changeInventory();
        changeMarket();
    });

    $("#strawBasket").click(function(){
        wheat -= 5;
        sticks -= 2;
        Gpower += 1;
        strawBasket = true;
        changeInventory();
        changeMarket();
    });
    
    $("#copperKnife").click(function(){
        copperIngots -= 2;
        sticks -= 2;
        Gpower += 2;
        Hpower = 2;
        copperKnife = true;
        huntingTool = true;
        changeInventory();
        changeMarket();
    });

    $("#stoneSpear").click(function(){
        stone -= 2;
        sticks -= 3;
        Hpower = 1;
        stoneSpear = true;
        huntingTool = true;
        $("#hunt").css("display", "inline");
        changeInventory();
        changeMarket();
    });
    
    $("#stoneAxe").click(function(){
        stone -= 3;
        sticks -= 2;
        Cpower = 1;
        choppingTool = true;
        stoneAxe = true;
        $("#chop").css("display", "inline");
        changeInventory();
        changeMarket();
    });
    
    $("#copperAxe").click(function(){
        copperIngots -= 3;
        sticks -= 2;
        Cpower = 2;
        copperAxe = true;
        changeInventory();
        changeMarket();
    });
    
     $("#ironAxe").click(function(){
        ironIngots -= 4;
        sticks -= 3;
        wood -= 2;
        Cpower = 3;
        ironAxe = true;
        changeInventory();
        changeMarket();
    });



    // Workstations
    


    $("#buildForge").click(function(){
        sticks -= 6;
        bricks -= 5;
        wood -= 10;
        stone -= 10;
        copperOre -= 5;
        forge = true;
        $("#forgeCraft").css("display", "inline");
        changeInventory();
        changeMarket();
    });
    
    $("#buildMetalWorkshop").click(function(){
        wood -= 15;
        stone -= 25;
        copperIngots -= 5;
        ironIngots -= 7;
        steelIngots -= 4;
        metalWorkshop = true;
        $("#metalWorkshopCraft").css("display", "inline");
        changeInventory();
        changeMarket();
    });
    
    $("#buildCampfire").click(function(){
        sticks -= 6;
        wheat -= 3;
        wood -= 4;
        stone -= 5;
        campfire = true;
        $("#campfireCraft").css("display", "inline");
        changeInventory();
        changeMarket();
    });
    
    $("#buildGreenhouse").click(function(){
        glass -= 8;
        bricks -= 4;
        steelIngots -= 3;
        steelPlates -= 1;
        copperWire -= 6;
        lvChips -= 1;
        greenhouse = true;
        $("#viewGreenhouse").css("display", "inline");
        changeInventory();
        changeMarket();
    });
    
    $("#buildCrusher").click(function(){
        steelIngots -= 4;
        steelPlates -= 2;
        copperWire -= 8;
        lvChips -= 1;
        crusher = true;
        $("#viewCrusher").css("display", "inline");
        changeInventory();
        changeMarket();
    });



    // Workstation Upgrades



    $("#farmSpeedI").click(function(){
        copperIngots -= 4;
        steelPlates -= 2;
        farmSpeed = farmSpeed * 2;
        changeInventory();
        changeMarket();
    });
    $("#campfireSpeedI").click(function(){
        stone -= 5;
        charcoal -= 5;
        campfireSpeed = campfireSpeed * 2;
        changeInventory();
        changeMarket();
    });
    $("#forgeSpeedI").click(function(){
        steelPlates -= 4;
        forgeSpeed = forgeSpeed * 2;
        changeInventory();
        changeMarket();
    });
    $("#forgeSpeedII").click(function(){
        copperWire -= 8;
        vaccumTubes -= 2;
        forgeSpeed = forgeSpeed * 3
        changeInventory();
        changeMarket();
    });
    $("#metalWorkshopSpeedI").click(function(){
        copperWire -= 4;
        steelIngots -= 2;
        lvChips -= 1;
        metalWorkshopSpeed = metalWorkshopSpeed * 2;
        changeInventory();
        changeMarket();
    });
    $("#extraCrusher").click(function(){
        steelIngots -= 2;
        steelPlates -= 1;
        lvChips -= 1;
        extraCrusher = true;
        $("#crushStone2").css("display", "block");
        changeInventory();
        changeMarket();
    });
    $("#greenhouseSpeedI").click(function(){
        copperWire -= 8;
        vaccumTubes -= 3;
        greenhouseSpeed = greenhouseSpeed * 2;
        $("#crushStone2").css("display", "block");
        changeInventory();
        changeMarket();
    });
    
    $("#wheatPlot").click(function(){
        sticks -= 6;
        wheat -= 4;
        wood -= 3;
        stone -= 5;
        extraWheatPlot = true;
        $("#plantWheat2").fadeIn(1000);
        changeInventory();
        changeMarket();
    });
    $("#berriesPlot").click(function(){
        sticks -= 6;
        wheat -= 4;
        wood -= 3;
        stone -= 5;
        extraBerriesPlot = true;
        $("#plantBerries2").fadeIn(1000);
        changeInventory();
        changeMarket();
    });
    $("#forgeAnnealing").click(function(){
        copperIngots -= 4;
        steelPlates -= 1;
        vaccumTubes -= 1;
        forgeAnnealing = true;
        changeInventory();
        changeMarket();
    });



    // Workstation Recipies
    


    $("#makeSugar").click(function(){
        sugarCane -= 5;
        sugar ++;
        changeInventory();
        changeMarket();
    });
    $("#makeSaltedMeat").click(function(){
        salt -= 3;
        cookedMeat -= 1;
        saltedMeat ++;
        changeInventory();
        changeMarket();
    });
    $("#makeBerryJam").click(function(){
        berries -= 5;
        sugar -= 2;
        berryJam ++;
        console.log(berryJam)
        changeInventory();
        changeMarket();
    });
    $("#makeApplePie").click(function(){
        apples -= 5;
        sugar -= 3;
        wheat -= 10;
        applePie ++;
        console.log(berryJam)
        changeInventory();
        changeMarket();
    });
    
    $("#cookBread").click(function(){
        if(breadReady == true){
            bread += 1;
            breadReady = false;
            breadTimer = -1;
            $("#cookBread").html("Cook Bread (10 Ticks, 3 Wheat)");
        }else if(breadTimer == -1){
            wheat -= 3;
            breadTimer = 10;
            breadReady = false;
            $("#cookBread").html("Bread Cooking (10 ticks Left)");
        }
        changeInventory();
        changeMarket();
    });

    $("#cookMeat").click(function(){
        if(meatReady == true){
            cookedMeat += 1;
            meatReady = false;
            meatTimer = -1;
            $("#cookMeat").html("Cook Meat (10 Ticks, 1 Meat)");
        }else if(meatTimer == -1){
            meat --;
            meatTimer = 10;
            meatReady = false;
            $("#cookMeat").html("Meat Cooking (10 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    
    $("#cookBricks").click(function(){
        if(bricksReady == true){
            bricks += 1;
            bricksReady = false;
            bricksTimer = -1;
            $("#cookBricks").html("Smelt Brick (20 Ticks, 3 Clay)");
        }else if(bricksTimer == -1){
            clay -= 3;
            bricksTimer = 20;
            bricksReady = false;
            $("#cookBricks").html("Brick Smelting (20 ticks left)");
        }
        changeInventory();
        changeMarket();
    });

    $("#cookCharcoal").click(function(){
        if(charcoalReady == true){
            charcoal += randInt(2, 4);
            charcoalReady = false;
            charcoalTimer = -1;
            $("#cookCharcoal").html("Burn Charcoal (60 Ticks, 5 Wood)");
        }else if(charcoalTimer == -1){
            wood -= 5;
            charcoalTimer = 60;
            charcoalReady = false;
            $("#cookCharcoal").html("Charcoal Burning (60 ticks Left)");
        }
        changeInventory();
        changeMarket();
    });
    
    $("#smeltGlass").click(function(){
        if(glassReady == true){
            $(".flexInvE").fadeIn(1000);
            electronicsUnlocked = true;
            glass += 1;
            glassReady = false;
            glassTimer = -1;
            $("#smeltGlass").html("Melt Glass (20 Ticks, 2 Sand, 3 Wood)");
        }else if(glassTimer == -1){
            sand -= 2;
            wood -= 3;
            glassTimer = 10;
            glassReady = false;
            $("#smeltGlass").html("Glass Melting (10 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    
    $("#smeltCopper").click(function(){
        if(copperReady == true){
            copperIngots += 1;
            copperReady = false;
            copperTimer = -1;
            $("#smeltCopper").html("Smelt Copper (20 Ticks, 2 Copper Ore, 3 Wood)");
        }else if(copperTimer == -1){
            copperOre -= 2;
            wood -= 3;
            copperTimer = 20;
            copperReady = false;
            $("#smeltCopper").html("Copper Ingot Smelting (20 ticks left)");
        }
        changeInventory();
        changeMarket();
    });

    $("#annealCopper").click(function(){
        if(annealCopperReady == true){
            annealedCopperIngots += 1;
            annealCopperReady = false;
            annealCopperTimer = -1;
            $("#annealCopper").html("Anneal Copper (120 Ticks, 1 Copper Ingot, 3 Coal or Charcoal)");
        }else if(annealCopperTimer == -1){
            copperIngots -= 1;
            subtractFuel(3);
            annealCopperTimer = 120;
            annealCopperReady = false;
            $("#annealCopper").html("Annealing Copper (120 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    
    $("#smeltIron").click(function(){
        if(ironReady == true){
            ironIngots += 1;
            ironReady = false;
            ironTimer = -1;
            $("#smeltIron").html("Smelt Iron (30 Ticks, 2 Iron Ore, 3 Coal or Charcoal)");
        }else if(ironTimer == -1){
            ironOre -= 2;
            subtractFuel(3);
            ironTimer = 20;
            ironReady = false;
            $("#smeltIron").html("Iron Ingot Smelting (20 ticks left)");
        }
        changeInventory();
        changeMarket();
    });

    $("#smeltAluminum").click(function(){
        if(aluminumReady == true){
            aluminumIngots += 1;
            aluminumReady = false;
            aluminumTimer = -1;
            $("#smeltAluminum").html("Smelt Aluminum (60 Ticks, 3 Aluminum Ore, 7 Coal or Charcoal)");
        }else if(aluminumTimer == -1){
            aluminumOre -= 3;
            subtractFuel(7);
            aluminumTimer = 60;
            aluminumReady = false;
            $("#smeltAluminum").html("Aluminum Ingot Smelting (60 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    
    $("#smeltSteel").click(function(){
        if(steelReady == true){
            steelIngots += 1;
            steelReady = false;
            steelTimer = -1;
            $("#smeltSteel").html("Forge Steel (60 Ticks, 2 Iron Ingots, 5 Coal or Charcoal)");
        }else if(steelTimer == -1){
            ironIngots -= 2;
            subtractFuel(5);
            steelTimer = 60;
            steelReady = false;
            $("#smeltSteel").html("Steel Ingot Forging (60 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    
    $("#pressSteel").click(function(){
        if(steelPlatesReady == true){
            $(".flexInvE").fadeIn(1000);
            electronicsUnlocked = true;
            steelPlates += 1;
            steelPlatesReady = false;
            steelPlatesTimer = -1;
            $("#pressSteel").html("Press Steel (60 Ticks, 2 Steel Ingots)");
        }else if(steelPlatesTimer == -1){
            steelIngots -= 2;
            steelPlatesTimer = 60;
            steelPlatesReady = false;
            $("#pressSteel").html("Steel Plate Pressing (60 ticks left)");
        }
        changeInventory();
        changeMarket();
    });

    $("#pressAluminum").click(function(){
        if(aluminumPlatesReady == true){
            aluminumPlates += 1;
            aluminumPlatesReady = false;
            aluminumPlatesTimer = -1;
            $("#pressAluminum").html("Press Aluminum (120 Ticks, 2 Aluminum Ingots)");
        }else if(aluminumPlatesTimer == -1){
            aluminumIngots -= 2;
            aluminumPlatesTimer = 120;
            aluminumPlatesReady = false;
            $("#pressAluminum").html("Aluminum Plate Pressing (120 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    
    $("#millCopper").click(function(){
        if(copperWireReady == true){
            $(".flexInvE").fadeIn(1000);
            electronicsUnlocked = true;
            copperWire += 1;
            copperWireReady = false;
            copperWireTimer = -1;
            $("#millCopper").html("Mill Copper (30 Ticks, 1 Copper Ingot)");
        }else if(copperWireTimer == -1){
            copperIngots -= 1;
            copperWireTimer = 30;
            copperWireReady = false;
            $("#millCopper").html("Copper Wire Milling (30 ticks left)");
        }
        changeInventory();
        changeMarket();
    });

    $("#millAnnealedCopper").click(function(){
        if(annealedCopperWireReady == true){
            annealedCopperWire += 1;
            annealedCopperWireReady = false;
            annealedCopperWireTimer = -1;
            $("#millAnnealedCopper").html("Mill Annealed Copper (20 Ticks, 1 Annealed Copper Ingot)");
        }else if(annealedCopperWireTimer == -1){
            annealedCopperIngots -= 1;
            annealedCopperWireTimer = 20;
            annealedCopperWireReady = false;
            $("#millAnnealedCopper").html("Annealed Copper Wire Milling (20 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    
    $("#assembleVaccumTube").click(function(){
        if(vaccumTubeReady == true){
            vaccumTubes += 1;
            vaccumTubeReady = false;
            vaccumTubeTimer = -1;
            $("#assembleVaccumTube").html("Assemble Vaccum Tube (90 Ticks, 2 Glass, 4 Copper Wire, 1 Steel Plate)");
        }else if(vaccumTubeTimer == -1){
            glass -= 2;
            copperWire -= 4;
            steelPlates -= 1;
            vaccumTubeTimer = 90;
            vaccumTubeReady = false;
            $("#assembleVaccumTube").html("Vaccum Tube Assembling (90 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    
    $("#assembleLVChip").click(function(){
        if(lvChipReady == true){
            lvChips += 1;
            lvChipReady = false;
            lvChipTimer = -1;
            $("#assembleLVChip").html("Assemble LV Chip (120 Ticks, 3 Vaccum Tubes, 8 Copper Wire, 2 Steel Plates)");
        }else if(lvChipTimer == -1){
            vaccumTubes -= 3;
            copperWire -= 8;
            steelPlates -= 2;
            lvChipTimer = 120;
            lvChipReady = false;
            $("#assembleLVChip").html("LV Chip Assembling (120 ticks left)");
        }
        changeInventory();
        changeMarket();
    });
    
    $("#crushStone").click(function(){
        if(crushStoneReady == true){
            for (let i = 0; i < randInt(7, 10); i++){
            var crushOutputI = randInt(0, 3)
            if(crushOutputI == 0){
                copperOre ++;
            }
            else if(crushOutputI == 1){
                ironOre ++;
            }
            else if(crushOutputI == 2){
                coal ++;
            }
            else if(crushOutputI == 3){
                aluminumOre ++;
            }
            else{
                console.log("Error: Gathering Function")
            }
        }
        crushStoneReady = false;
        crushStoneTimer = -1;
        $("#crushStone").html("Crush Stone (30 Minutes, 10 Stone)");
        }else if(crushStoneTimer == -1){
            stone -= 10;
            crushStoneTimer = 30;
            crushStoneReady = false;
            $("#crushStone").html("Crushing Stone (30 minutes left)");
        }
        changeInventory();
        changeMarket();
    });
    $("#crushStone2").click(function(){
        if(crushStoneReady2 == true){
            for (let i = 0; i < randInt(7, 10); i++){
            var crushOutputII = randInt(0, 3)
            sand ++;
            clay ++;
            if(crushOutputII == 0){
                copperOre ++;
            }
            else if(crushOutputII == 1){
                ironOre ++;
            }
            else if(crushOutputII == 2){
                coal ++;
            }
            else if(crushOutputII == 3){
                aluminumOre ++;
            }
            else{
                console.log("Error: Gathering Function 2")
            }
        }
        crushStoneReady2 = false;
        crushStoneTimer2 = -1;
        $("#crushStone2").html("Crush Stone (30 Minutes, 10 Stone)");
        }else if(crushStoneTimer2 == -1){
            stone -= 10;
            crushStoneTimer2 = 30;
            crushStoneReady2 = false;
            $("#crushStone2").html("Crushing Stone (30 minutes left)");
        }
        changeInventory();
        changeMarket();
    });
    $("#tryAgain").click(function(){
        newLife();
    });

    $("#craft").click(function(){
        menu = switchMenu("crafting");
        changeMarket();
    });
    $("#metalWorkshopCraft").click(function(){
        menu = switchMenu("metalWorkshopRecipes");
        changeMarket();
    });
    $("#forgeCraft").click(function(){
        menu = switchMenu("forgeRecipes");
        changeMarket();
    });
    $("#campfireCraft").click(function(){
        menu = switchMenu("campfireRecipes");
        changeMarket();
    });
    $("#build").click(function(){
        menu = switchMenu("building");
        changeMarket();
    });
    $("#eat").click(function(){
        menu = switchMenu("eat");
        changeMarket();
    });
    $("#kitchen").click(function(){
        menu = switchMenu("kitchen");
        changeMarket();
    });
    $("#farm").click(function(){
        menu = switchMenu("viewFarm");
        changeMarket();
    });
    $("#viewCrafting").click(function(){
        $(".content").children().css("display", "none");
        $(".craftingBook").css("display", "block");
        changeMarket();
    });
    $("#viewBiome").click(function(){
        $(".content").children().css("display", "none");
        $(".biomeInfo").css("display", "block");
        changeMarket();
    });
    $("#viewSummit").click(function(){
        $("#summitGmulti").html("Upgrade Gathering Multiplier (" + summitGmultiCost + " Summit Exploration)");
        $("#summitHmulti").html("Upgrade Hunting Multiplier (" + summitHmultiCost + " Summit Exploration)");
        $("#summitMmulti").html("Upgrade Mining Multiplier (" + summitMmultiCost + " Summit Exploration)");
        $("#summitCmulti").html("Upgrade Chopping Multiplier (" + summitCmultiCost + " Summit Exploration)");
        $(".content").children().css("display", "none");
        $(".summitMenu").css("display", "block");
        changeMarket();
    });
    $("#viewGreenhouse").click(function(){
        menu = switchMenu("viewGreenhouse")
        changeMarket();
    });
    $("#viewCrusher").click(function(){
        menu = switchMenu("viewCrusher")
        changeMarket();
    });
    $("#saveLoad").click(function(){
        menu = switchMenu("saveLoad")
        changeMarket();
    });

    $(".return").click(function(){
        menu = switchMenu("main");
    });
    $("#returnGuide").click(function(){
        $(".content").children().css("display", "block");
        $(".dead").css("display", "none");
        $(".biomeInfo").css("display", "none");
        $(".craftingBook").css("display", "none");
        $(".summitMenu").css("display", "none");
        $(".inventory").css("display", "flex");
        $(".flexBarContainer").css("display", "flex");
    });
    $("#returnBiome").click(function(){
        $(".content").children().css("display", "block");
        $(".biomeInfo").css("display", "none");
        $(".craftingBook").css("display", "none");
        $(".summitMenu").css("display", "none");
        $(".inventory").css("display", "flex");
        $(".flexBarContainer").css("display", "flex");
    });
    $("#returnSummit").click(function(){
        $(".content").children().css("display", "block");
        $(".biomeInfo").css("display", "none");
        $(".craftingBook").css("display", "none");
        $(".summitMenu").css("display", "none");
        $(".inventory").css("display", "flex");
        $(".flexBarContainer").css("display", "flex");
    });
    $("#restart").click(function(){
        newLife(true);
    });
    $("#climbSummit").click(function(){
        if(summitCheck == false){
            summitCheck = true;
            $("#climbSummit").html("Click Again To Confirm");
        }else{
            forestryPoints = sticks + sand + clay + sugarCane + (3 * bricks) + leather + wood + (2 * charcoal);
            miningPoints = stone + 2 * copperOre + 3 * (coal + ironIngots) + 7 * copperIngots + 15 * ironIngots + 16 * annealedCopperIngots + 45 * steelIngots + 9 * aluminumOre + 30 * aluminumOre;
            electronicsPoints = 5 * glass + 7 * copperWire + 90 * steelPlates + 60 * aluminumPlates + 128 * vaccumTubes + 606 * lvChips;
            totalPoints = forestryPoints + miningPoints + electronicsPoints;
            summitExploration += Math.round(Math.pow(totalPoints/10000, 1.2))
            newLife();
            summitCheck = false;
            $("#climbSummit").html("Embark");
        }
    });
    $("#summitGmulti").click(function(){
        summitExploration -= summitGmultiCost;
        summitGmultiPower += 0.1;
        summitGmultiCost += Math.round(summitGmultiCost * 0.6)
        $("#summitGmulti").html("Upgrade Gathering Multiplier (" + summitGmultiCost + " Summit Exploration)");
        changeInventory();
        changeMarket();
    });
    $("#summitHmulti").click(function(){
        summitExploration -= summitHmultiCost;
        summitHmultiPower += 0.1;
        summitHmultiCost += Math.round(summitHmultiCost * 0.5)
        $("#summitHmulti").html("Upgrade Hunting Multiplier (" + summitHmultiCost + " Summit Exploration)");
        changeInventory();
        changeMarket();
    });
    $("#summitMmulti").click(function(){
        summitExploration -= summitMmultiCost;
        summitMmultiPower += 0.1;
        summitMmultiCost += Math.round(summitMmultiCost * 0.7)
        $("#summitMmulti").html("Upgrade Mining Multiplier (" + summitMmultiCost + " Summit Exploration)");
        changeInventory();
        changeMarket();
    });
    $("#summitCmulti").click(function(){
        summitExploration -= summitCmultiCost;
        summitCmultiPower += 0.1;
        summitCmultiCost += Math.round(summitCmultiCost * 0.5)
        $("#summitCmulti").html("Upgrade Chopping Multiplier (" + summitCmultiCost + " Summit Exploration)");
        changeInventory();
        changeMarket();
    });


    function changeInventory(){
        $("#sticks").html("Sticks: " + sticks);
        $("#sand").html("Sand: " + sand);
        $("#clay").html("Clay: " + clay);
        $("#glass").html("Glass: " + glass);
        $("#bricks").html("Bricks: " + bricks);
        $("#wood").html("Wood: " + wood);
        $("#sugarCane").html("Sugar Cane: " + sugarCane);
        $("#leather").html("Leather: " + leather);

        $("#meat").html("Meat: " + meat);
        $("#salt").html("Salt: " + salt);
        $("#sugar").html("Sugar: " + sugar);
        $("#cookedMeat").html("Cooked Meat: " + cookedMeat);
        $("#berries").html("Berries: " + berries);
        $("#saltedMeat").html("Salted Meat: " + saltedMeat);
        $("#berryJam").html("Jam: " + berryJam);
        $("#wheat").html("Wheat: " + wheat);
        $("#bread").html("Bread: " + bread);
        $("#seeds").html("Seeds: " + seeds);
        $("#applePie").html("Apple Pie: " + applePie);
        $("#apples").html("Apples: " + apples);

        $("#Gpower").html("Gathering Power: " + Gpower);
        $("#Hpower").html("Hunting Power: " + Hpower);
        $("#Mpower").html("Mining Power: " + Mpower);
        $("#Cpower").html("Chopping Power: " + Cpower);
        $("#stone").html("Stone: " + stone);
        $("#copperOre").html("Copper Ore: " + copperOre);
        $("#coal").html("Coal: " + coal);
        $("#charcoal").html("Charcoal: " + charcoal);
        $("#ironOre").html("Iron Ore: " + ironOre);
        $("#aluminumOre").html("Aluminum Ore: " + aluminumOre);
        $("#copperWire").html("Copper Wire: " + copperWire);
        $("#annealedCopperWire").html("Annealed Copper Wire: " + annealedCopperWire);
        $("#aluminumIngots").html("Aluminum Ingots: " + aluminumIngots);
        $("#steelIngots").html("Steel Ingots: " + steelIngots);
        $("#ironIngots").html("Iron Ingots: " + ironIngots);
        $("#copperIngots").html("Copper Ingots: " + copperIngots);
        $("#annealedCopperIngots").html("Annealed Copper Ingots: " + annealedCopperIngots);
        $("#steelPlates").html("Steel Plates: " + steelPlates);
        $("#aluminumPlates").html("Aluminum Plates: " + aluminumPlates);
        $("#vaccumTubes").html("Vaccum Tubes: " + vaccumTubes);
        $("#lvChips").html("LV Chips: " + lvChips);

        $("#summitExploration").html("Summit Exploration: " + summitExploration);
        $("#summitGmultiValue").html("Gathering Multiplier: " + Math.round(summitGmultiPower * 100) / 100);
        $("#summitHmultiValue").html("Hunting Multiplier: " + Math.round(summitHmultiPower * 100) / 100);
        $("#summitMmultiValue").html("Mining Multiplier: " + Math.round(summitMmultiPower * 100) / 100);
        $("#summitCmultiValue").html("Chopping Multiplier: " + Math.round(summitCmultiPower * 100) / 100);
        
        if(artifact == false){
            $("#artifact").css("display", "none")
        }
        else if(hornOfPlenty == true){
            $("#artifact").html("Current artifact: Horn Of Plenty")
        }

        if(huntingTool == false){
            $("#huntingTool").css("display", "none");
        }else if(copperKnife == true){
            $("#huntingTool").html("Current hunting tool: Copper Knife");
            Hpower = 2;
        }else if(stoneSpear == true){
            $("#huntingTool").html("Current hunting tool: Stone Spear");
            Hpower = 1;
        }
        
        if(miningTool == false){
            $("#miningTool").html("Current mining tool: None");
        }
        else if(ironPickaxe == true){
            $("#miningTool").html("Current mining tool: Iron Pickaxe");
            Mpower = 4;
        }
        else if(copperPickaxe == true){
            $("#miningTool").html("Current mining tool: Copper Pickaxe");
            Mpower = 3;
        }
        else if(sharpStone == true){
            $("#miningTool").html("Current mining tool: Sharp Stone");
            Mpower = 2;
        }
        else if(pointyStick == true){
            $("#miningTool").html("Current mining tool: Pointy Stick");
            Mpower = 1;
        }
        
        if(choppingTool == false){
            $("#choppingTool").html("Current chopping tool: None");
        }
        else if(ironAxe == true){
            $("#choppingTool").html("Current chopping tool: Iron Axe");
            Cpower = 3;
        }
        else if(copperAxe == true){
            $("#choppingTool").html("Current chopping tool: Copper Axe");
            Cpower = 2;
        }
        else if(stoneAxe == true){
            $("#choppingTool").html("Current chopping tool: Stone Axe");
            Cpower = 1;
        }
        if(campfire == true){
            $("#campfire").html("Campfire: Built")
        }if(forge == true){
            $("#forge").html("Forge: Built")
        }if(metalWorkshop == true){
            $("#metalWorkshop").html("Metal Workshop: Built")
        }if(greenhouse == true){
            $("#greenhouse").html("Greenhouse: Built")
        }if(crusher == true){
            $("#crusher").html("Crusher: Built")
        }
    }

    function changeMarket(){
        if(summitGmultiCost <= summitExploration){
            $("#summitGmulti").prop("disabled", false)
            $("#summitGmulti").html("Upgrade Gathering Multiplier (" + summitGmultiCost + " Summit Exploration)");
        }else{
            $("#summitGmulti").prop("disabled", true)
        }
        if(summitHmultiCost <= summitExploration){
            $("#summitHmulti").prop("disabled", false)
            $("#summitHmulti").html("Upgrade Hunting Multiplier (" + summitHmultiCost + " Summit Exploration)");
        }else{
            $("#summitHmulti").prop("disabled", true)
        }
        if(summitMmultiCost <= summitExploration){
            $("#summitMmulti").prop("disabled", false)
            $("#summitMmulti").html("Upgrade Mining Multiplier (" + summitMmultiCost + " Summit Exploration)");
        }else{
            $("#summitMmulti").prop("disabled", true)
        }
        if(summitCmultiCost <= summitExploration){
            $("#summitCmulti").prop("disabled", false)
            $("#summitCmulti").html("Upgrade Chopping Multiplier (" + summitCmultiCost + " Summit Exploration)");
        }else{
            $("#summitCmulti").prop("disabled", true)
        }
        if(sticks > 5 && bricks > 4 && wood > 9 && stone > 9 && copperOre > 4 && forge == false){
            $("#buildForge").prop("disabled", false);
            $("#buildForge").css("display", "block");
        }else{
            if(campfire && !forge){
                $("#buildForge").prop("disabled", true);
                $("#buildForge").css("display", "block");
            }else{
                $("#buildForge").css("display", "none");
            }
        }
        if(wood > 14 && stone > 24 && copperIngots > 4 && ironIngots > 6 && steelIngots > 3 && metalWorkshop == false){
            $("#buildMetalWorkshop").prop("disabled", false);
            $("#buildMetalWorkshop").css("display", "block");
        }else{
            if(forge && !metalWorkshop){
                $("#buildMetalWorkshop").prop("disabled", true);
                $("#buildMetalWorkshop").css("display", "block");
            }else{
                $("#buildMetalWorkshop").css("display", "none");
            }
        }
        if(sticks > 5 && wheat > 2 && wood > 3 && stone > 4 && campfire == false){
            $("#buildCampfire").prop("disabled", false);
            $("#buildCampfire").css("display", "block");
        }else{
            if(sticks > 0 && wheat > 0 && wood > 0 && stone > 0 && campfire == false){
                $("#buildCampfire").prop("disabled", true);
                $("#buildCampfire").css("display", "block");
            }else{
                $("#buildCampfire").css("display", "none");
            }
        }
        if(glass > 7 && bricks > 3 && steelIngots > 2 && steelPlates > 0 && copperWire > 5 && lvChips > 0 && greenhouse == false){
            $("#buildGreenhouse").prop("disabled", false);
            $("#buildGreenhouse").css("display", "block");
        }else{
            if(metalWorkshop && !greenhouse){
                $("#buildGreenhouse").prop("disabled", true);
                $("#buildGreenhouse").css("display", "block");
            }else{
                $("#buildGreenhouse").css("display", "none");
            }
        }
        if(steelIngots > 3 && steelPlates > 1 && copperWire > 7 && lvChips > 0 && crusher == false){
            $("#buildCrusher").prop("disabled", false);
            $("#buildCrusher").css("display", "block");
        }else{
            if(metalWorkshop && !crusher){
                $("#buildCrusher").prop("disabled", true);
                $("#buildCrusher").css("display", "block");
            }
            $("#buildCrusher").css("display", "none");
        }
        if(!(breadTimer > 0) && wheat > 2 || breadReady == true){
            $("#cookBread").prop("disabled", false);
            $("#cookBread").css("display", "block");
        }else{
            if(wheat > 0 || breadTimer > 0 || bread > 0){
                $("#cookBread").prop("disabled", true);
                $("#cookBread").css("display", "block");
            }else{
                $("#cookBread").css("display", "none");
            }
        }
        if(sugarCane > 4){
            $("#makeSugar").prop("disabled", false);
            $("#makeSugar").css("display", "block");
        }else{
            if(sugarCane > 0 || sugar > 0){
                $("#makeSugar").prop("disabled", true);
                $("#makeSugar").css("display", "block");
            }else{
                $("#makeSugar").css("display", "none");
            }
        }
        if(cookedMeat > 0 && salt > 2){
            $("#makeSaltedMeat").prop("disabled", false);
            $("#makeSaltedMeat").css("display", "block");
        }else{
            if(cookedMeat > 0 && salt > 0 || saltedMeat > 0){
                $("#makeSaltedMeat").prop("disabled", true);
                $("#makeSaltedMeat").css("display", "block");
            }else{
                $("#makeSaltedMeat").css("display", "none");
            }
        }
        if(berries > 4 && sugar > 1){
            $("#makeBerryJam").prop("disabled", false);
            $("#makeBerryJam").css("display", "block");
        }else{
            if(berries > 0 && sugar > 0 || berryJam > 0){
                $("#makeBerryJam").prop("disabled", true);
                $("#makeBerryJam").css("display", "block");
            }else{
                $("#makeBerryJam").css("display", "none");
            }
        }
        if(apples > 4 && wheat > 9 && sugar > 2){
            $("#makeApplePie").prop("disabled", false);
            $("#makeApplePie").css("display", "block");
        }else{
            if(apples > 0 && wheat > 0 && sugar > 0 || applePie > 0){
                $("#makeApplePie").prop("disabled", true);
                $("#makeApplePie").css("display", "block");
            }else{
                $("#makeApplePie").css("display", "none");
            }
        }
        if(!(meatTimer > 0) && meat > 0 || meatReady == true){
            $("#cookMeat").prop("disabled", false);
            $("#cookMeat").css("display", "block");
        }else{
            if(meatTimer > 0 || cookedMeat > 0){
                $("#cookMeat").prop("disabled", true);
                $("#cookMeat").css("display", "block");
            }else{
                $("#cookMeat").css("display", "none");
            }
        }
        if(!(bricksTimer > 0) && clay > 2 || bricksReady == true){
            $("#cookBricks").prop("disabled", false);
            $("#cookBricks").css("display", "block");
        }else{
            if(clay > 0 || bricks > 0 || bricksTimer > 0){
                $("#cookBricks").prop("disabled", true);
                $("#cookBricks").css("display", "block");
            }else{
                $("#cookBricks").css("display", "none");
            }
        }
        if(!(charcoalTimer > 0) && wood > 4 || charcoalReady == true){
            $("#cookCharcoal").prop("disabled", false);
            $("#cookCharcoal").css("display", "block");
        }else{
            if(wood > 0 || charcoal > 0 || charcoalTimer > 0){
                $("#cookCharcoal").prop("disabled", true);
                $("#cookCharcoal").css("display", "block");
            }else{
                $("#cookCharcoal").css("display", "none");
            }
        }
        if(!(glassTimer > 0) && (wood > 2 && sand > 1) || glassReady == true){
            $("#smeltGlass").prop("disabled", false);
            $("#smeltGlass").css("display", "block");
        }else{
            if(wood > 0 && sand > 0 || glass > 0 || glassTimer > 0){
                $("#smeltGlass").prop("disabled", true);
                $("#smeltGlass").css("display", "block");
            }else{
                $("#smeltGlass").css("display", "none");
            }
        }
        if(!(copperTimer > 0) && (wood > 2 && copperOre > 1) || copperReady == true){
            $("#smeltCopper").prop("disabled", false);
            $("#smeltCopper").css("display", "block");
        }else{
            if(wood > 0 && copperOre > 0 || copperIngots > 0 || copperTimer > 0){
                $("#smeltCopper").prop("disabled", true);
                $("#smeltCopper").css("display", "block");
            }else{
                $("#smeltCopper").css("display", "none");
            }
        }
        if(!(annealCopperTimer > 0) && forgeAnnealing == true && (fuelAmt() > 2 && copperIngots > 0) || annealCopperReady == true){
            $("#annealCopper").prop("disabled", false);
            $("#annealCopper").css("display", "block");
        }else{
            if(forgeAnnealing == true && fuelAmt() > 0 && copperIngots > 0 || annealedCopperIngots > 0 || annealCopperTimer > 0){
                $("#annealCopper").prop("disabled", true);
                $("#annealCopper").css("display", "block");
            }else{
                $("#annealCopper").css("display", "none");
            }
        }
        if(!(ironTimer > 0) && (fuelAmt() > 2 && ironOre > 1) || ironReady == true){
            $("#smeltIron").prop("disabled", false);
            $("#smeltIron").css("display", "block");
        }else{
            if(fuelAmt() > 0 && ironOre > 0 || ironIngots > 0 || ironTimer > 0){
                $("#smeltIron").prop("disabled", true);
                $("#smeltIron").css("display", "block");
            }else{
                $("#smeltIron").css("display", "none");
            }
        }
        if(!(aluminumTimer > 0) && (fuelAmt() > 6 && aluminumOre > 2) || aluminumReady == true){
            $("#smeltAluminum").prop("disabled", false);
            $("#smeltAluminum").css("display", "block");
        }else{
            if(fuelAmt() > 0 && aluminumOre > 0 || aluminumIngots > 0 || aluminumTimer > 0){
                $("#smeltAluminum").prop("disabled", true);
                $("#smeltAluminum").css("display", "block");
            }else{
                $("#smeltAluminum").css("display", "none");
            }
        }
        if(!(steelTimer > 0) && (fuelAmt() > 4 && ironIngots > 1) || steelReady == true){
            $("#smeltSteel").prop("disabled", false);
            $("#smeltSteel").css("display", "block");
        }else{
            if(fuelAmt() > 0 && ironIngots > 0 || steelIngots > 0 || steelTimer > 0){
                $("#smeltSteel").prop("disabled", true);
                $("#smeltSteel").css("display", "block");
            }else{
                $("#smeltSteel").css("display", "none");
            }
        }
        if(!(steelPlatesTimer > 0)  && steelIngots > 1 || steelPlatesReady == true){
            $("#pressSteel").prop("disabled", false);
            $("#pressSteel").css("display", "block");
        }else{
            if(steelIngots > 0 || steelPlates > 0 || steelPlatesTimer > 0){
                $("#pressSteel").prop("disabled", true);
                $("#pressSteel").css("display", "block");
            }else{
                $("#pressSteel").css("display", "none");
            }
        }
        if(!(aluminumPlatesTimer > 0)  && aluminumIngots > 1 || aluminumPlatesReady == true){
            $("#pressAluminum").prop("disabled", false);
            $("#pressAluminum").css("display", "block");
        }else{
            if(aluminumIngots > 0 || aluminumPlates > 0 || aluminumPlatesTimer > 0){
                $("#pressAluminum").prop("disabled", true);
                $("#pressAluminum").css("display", "block");
            }else{
                $("#pressAluminum").css("display", "none");
            }
        }
        if(!(copperWireTimer > 0)  && copperIngots > 0 || copperWireReady == true){
            $("#millCopper").prop("disabled", false);
            $("#millCopper").css("display", "block");
        }else{
            if(copperIngots > 0 || copperWire > 0 || copperWireTimer > 0){
                $("#millCopper").prop("disabled", true);
                $("#millCopper").css("display", "block");
            }else{
                $("#millCopper").css("display", "none");
            }
        }
        if(!(annealedCopperWireTimer > 0) && annealedCopperIngots > 0 || annealedCopperWireReady == true){
            $("#millAnnealedCopper").prop("disabled", false);
            $("#millAnnealedCopper").css("display", "block");
        }else{
            if(annealedCopperIngots > 0 || annealedCopperWire > 0 || annealedCopperWireTimer > 0){
                $("#millAnnealedCopper").prop("disabled", true);
                $("#millAnnealedCopper").css("display", "block");
            }else{
                $("#millAnnealedCopper").css("display", "none");
            }
        }
        if(!(vaccumTubeTimer > 0) && (glass > 1 && copperWire > 3 && steelPlates > 0) || vaccumTubeReady == true){
            $("#assembleVaccumTube").prop("disabled", false);
            $("#assembleVaccumTube").css("display", "block");
        }else{
            if(glass > 0 && copperWire > 0 && steelPlates > 0 || vaccumTubes > 0 || vaccumTubeTimer > 0){
                $("#assembleVaccumTube").prop("disabled", true);
                $("#assembleVaccumTube").css("display", "block");
            }else{
                $("#assembleVaccumTube").css("display", "none");
            }
        }
        if(!(lvChipTimer > 0) && (copperWire > 7 && steelPlates > 1 && vaccumTubes > 2) || lvChipReady == true){
            $("#assembleLVChip").prop("disabled", false);
            $("#assembleLVChip").css("display", "block");
        }else{
            if(copperWire > 0 && steelPlates > 0 && vaccumTubes > 0 || lvChips > 0 || lvChipTimer > 0){
                $("#assembleLVChip").prop("disabled", true);
                $("#assembleLVChip").css("display", "block");
            }else{
                $("#assembleLVChip").css("display", "none");
            }
        }
        if(!(crushStoneTimer > 0) && stone > 9 || crushStoneReady){
            $("#crushStone").prop("disabled", false);
            $("#crushStone").css("display", "block");
        }else{
            if(stone > 0 || crushStoneTimer > 0){
                $("#crushStone").prop("disabled", true);
                $("#crushStone").css("display", "block");
            }
            $("#crushStone").css("display", "none");
        }
        if(!(crushStoneTimer2 > 0) && stone > 9 || crushStoneReady2){
            $("#crushStone2").prop("disabled", false);
            $("#crushStone2").css("display", "block");
        }else{
            if(stone > 0 || crushStoneTimer2 > 0){
                $("#crushStone2").prop("disabled", true);
                $("#crushStone2").css("display", "block");
            }
            $("#crushStone2").css("display", "none");
        }
        if(bread > 1 && stone > 4 && copperIngots > 0 && hornOfPlenty == false){
            $("#craftHornOfPlenty").prop("disabled", false);
            $("#craftHornOfPlenty").css("display", "block");
        }else{
            if(bread > 0 && stone > 0 && copperIngots > 0 && hornOfPlenty == false){
                $("#craftHornOfPlenty").prop("disabled", true);
                $("#craftHornOfPlenty").css("display", "block");
            }else{
                $("#craftHornOfPlenty").css("display", "none");
            }
        }
        if(wheat > 4 && sticks > 1 && strawBasket == false){
            $("#strawBasket").prop("disabled", false);
            $("#strawBasket").css("display", "block");
        }else{
            if(wheat > 0 && sticks > 0 && strawBasket == false){
                $("#strawBasket").prop("disabled", true);
                $("#strawBasket").css("display", "block");
            }else{
                $("#strawBasket").css("display", "none");
            }
        }
        if(sticks > 1 && pointyStick == false){
            $("#pointyStick").prop("disabled", false);
            $("#pointyStick").css("display", "block");
        }else{
            if(sticks == 1 && pointyStick == false){
                $("#pointyStick").prop("disabled", true);
                $("#pointyStick").css("display", "block");
            }else{
                $("#pointyStick").css("display", "none");
            }
        }
        if(stone > 1 && sharpStone == false){
            $("#sharpStone").prop("disabled", false);
            $("#sharpStone").css("display", "block");
        }else{
            if(stone > 0 && sharpStone == false){
                $("#sharpStone").prop("disabled", true);
                $("#sharpStone").css("display", "block");
            }else{
                $("#sharpStone").css("display", "none");
            }
        }
        if(stone > 2 && sticks > 1 && stoneAxe == false){
            $("#stoneAxe").prop("disabled", false);
            $("#stoneAxe").css("display", "block");
        }else{
            if(stone > 0 && sticks > 0 && stoneAxe == false){
                $("#stoneAxe").prop("disabled", true);
                $("#stoneAxe").css("display", "block");
            }else{
                $("#stoneAxe").css("display", "none");
            }
        }
        if(stone > 1 && sticks > 2 && stoneSpear == false){
            $("#stoneSpear").prop("disabled", false);
            $("#stoneSpear").css("display", "block");
        }else{
            if(stone > 0 && sticks > 0 && stoneSpear == false){
                $("#stoneSpear").prop("disabled", true);
                $("#stoneSpear").css("display", "block");
            }else{
                $("#stoneSpear").css("display", "none");
            }
        }
        if(copperIngots > 2 && sticks > 1 && copperAxe == false){
            $("#copperAxe").prop("disabled", false);
            $("#copperAxe").css("display", "block");
        }else{
            if(copperIngots > 0 && sticks > 0 && copperAxe == false){
                $("#copperAxe").prop("disabled", true);
                $("#copperAxe").css("display", "block");
            }else{
                $("#copperAxe").css("display", "none");
            }
        }
        if(copperIngots > 3 && sticks > 2 && copperPickaxe == false){
            $("#copperPickaxe").prop("disabled", false);
            $("#copperPickaxe").css("display", "block");
        }else{
            if(copperIngots > 0 && sticks > 0 && copperPickaxe == false){
                $("#copperPickaxe").prop("disabled", true);
                $("#copperPickaxe").css("display", "block");
            }else{
                $("#copperPickaxe").css("display", "none");
            }
        }
        if(copperIngots > 1 && sticks > 1 && copperKnife == false){
            $("#copperKnife").prop("disabled", false);
            $("#copperKnife").css("display", "block");
        }else{
            if(copperIngots > 0 && sticks > 0 && copperKnife == false){
                $("#copperKnife").prop("disabled", true);
                $("#copperKnife").css("display", "block");
            }else{
                $("#copperKnife").css("display", "none");
            }
        }

        //--------------//
        //-Finish Tools-//
        //--------------//

        if(ironIngots > 3 && sticks > 2 && wood > 1 && ironAxe == false){
            $("#ironAxe").prop("disabled", false);
            $("#ironAxe").css("display", "block");
        }else{
            if(ironIngots > 0 && sticks > 0 && wood > 0 && ironAxe == false){
                $("#ironAxe").prop("disabled", true);
                $("#ironAxe").css("display", "block");
            }else{
                $("#ironAxe").css("display", "none");
            }
        }
        if(ironIngots > 5 && sticks > 3 && wood > 2 && ironPickaxe == false){
            $("#ironPickaxe").prop("disabled", false);
            $("#ironPickaxe").css("display", "block");
        }else{
            if(ironIngots > 0 && sticks > 0 && wood > 0 && ironPickaxe == false){
                $("#ironPickaxe").prop("disabled", true);
                $("#ironPickaxe").css("display", "block");
            }else{
                $("#ironPickaxe").css("display", "none");
            }
        }
        if(apples > 0 && hunger < maxHunger){
            $("#eatApple").css("display", "block");
        }else{
            $("#eatApple").css("display", "none");
        }
        if(berries > 0 && hunger < maxHunger){
            $("#eatBerries").css("display", "block");
        }else{
            $("#eatBerries").css("display", "none");
        }
        if(berryJam > 0 && hunger < maxHunger){
            $("#eatBerryJam").css("display", "block");
        }else{
            $("#eatBerryJam").css("display", "none");
        }
        if(bread > 0 && hunger < maxHunger){
            $("#eatBread").css("display", "block");
        }else{
            $("#eatBread").css("display", "none");
        }
        if(meat > 0 && hunger < maxHunger){
            $("#eatMeat").css("display", "block");
        }else{
            $("#eatMeat").css("display", "none");
        }
        if(cookedMeat > 0 && hunger < maxHunger){
            $("#eatCookedMeat").css("display", "block");
        }else{
            $("#eatCookedMeat").css("display", "none");
        }
        if(saltedMeat > 0 && hunger < maxHunger){
            $("#eatSaltedMeat").css("display", "block");
        }else{
            $("#eatSaltedMeat").css("display", "none");
        }
        if(applePie > 0 && hunger < maxHunger){
            $("#eatApplePie").css("display", "block");
        }else{
            $("#eatApplePie").css("display", "none");
        }
        if(seeds > 0 || wheatTimer > 0 || wheatReady == true){
            $("#plantWheat").css("display", "block");
        }else{
            $("#plantWheat").css("display", "none");
        }
        if(berries > 0 || berriesTimer > 0 || berriesReady == true){
            $("#plantBerries").css("display", "block");
        }else{
            $("#plantBerries").css("display", "none");
        }
        if(apples > 0 || applesTimer > 0 || applesReady == true){
            $("#plantApples").css("display", "block");
        }else{
            $("#plantApples").css("display", "none");
        }
        if(extraWheatPlot == true && seeds > 0 || wheatTimer2 > 0 || wheatReady2 == true){
            $("#plantWheat2").css("display", "block");
        }else{
            $("#plantWheat2").css("display", "none");
        }
        if(extraBerriesPlot == true && berries > 0 || berriesTimer2 > 0 || berriesReady2 == true){
            $("#plantBerries2").css("display", "block");
        }else{
            $("#plantBerries2").css("display", "none");
        }
        if(berries > 0 || berriesTimerG > 0){
            $("#plantBerriesG").css("display", "block");
        }else{
            $("#plantBerriesG").css("display", "none");
        }
        if(wheat > 0 || wheatTimerG > 0){
            $("#plantWheatG").css("display", "block");
        }else{
            $("#plantWheatG").css("display", "none");
        }
        if(sticks > 5 && wheat > 3 && wood > 2 && stone > 4 && extraWheatPlot == false){
            $("#wheatPlot").prop("disabled", false);
            $("#wheatPlot").css("display", "block");
        }else{
            if(sticks > 0 && wheat > 0 && wood > 0 && stone > 0 && extraWheatPlot == false){
                $("#wheatPlot").prop("disabled", true);
                $("#wheatPlot").css("display", "block");
            }else{
                $("#wheatPlot").css("display", "none");
            }
        }
        if(sticks > 5 && wheat > 3 && wood > 2 && stone > 4 && extraBerriesPlot == false){
            $("#berriesPlot").prop("disabled", false);
            $("#berriesPlot").css("display", "block");
        }else{
            if(sticks > 0 && wheat > 0 && wood > 0 && stone > 0 && extraBerriesPlot == false){
                $("#berriesPlot").prop("disabled", true);
                $("#berriesPlot").css("display", "block");
            }else{
                $("#berriesPlot").css("display", "none");
            }
        }
        if(steelIngots > 1 && steelPlates > 0 && lvChips > 0 && extraCrusher == false){
            $("#extraCrusher").prop("disabled", false);
            $("#extraCrusher").css("display", "block");
        }else{
            if(steelIngots > 0 && steelPlates > 0 && lvChips > 0 && extraCrusher == false){
                $("#extraCrusher").prop("disabled", true);
                $("#extraCrusher").css("display", "block");
            }else{
                $("#extraCrusher").css("display", "none");
            }
        }
        if(copperIngots > 3 && steelPlates > 0 && vaccumTubes > 0 && forgeAnnealing == false){
            $("#forgeAnnealing").prop("disabled", false);
            $("#forgeAnnealing").css("display", "block");
        }else{
            if(copperIngots > 0 && steelPlates > 0 && vaccumTubes > 0 && forgeAnnealing == false){
                $("#forgeAnnealing").prop("disabled", true);
                $("#forgeAnnealing").css("display", "block");
            }else{
                $("#forgeAnnealing").css("display", "none");
            }
        }
        if(copperIngots > 3 && steelPlates > 1 && farmSpeed < 2){
            $("#farmSpeedI").prop("disabled", false);
            $("#farmSpeedI").css("display", "block");
        }else{
            if(copperIngots > 0 && steelPlates > 0 && farmSpeed < 2){
                $("#farmSpeedI").prop("disabled", true);
                $("#farmSpeedI").css("display", "block");
            }else{
                $("#farmSpeedI").css("display", "none");
            }
        }
        if(stone > 4 && charcoal > 4 && campfireSpeed < 2){
            $("#campfireSpeedI").prop("disabled", false);
            $("#campfireSpeedI").css("display", "block");
        }else{
            if(stone > 0 && charcoal > 0 && campfireSpeed < 2){
                $("#campfireSpeedI").prop("disabled", true);
                $("#campfireSpeedI").css("display", "block");
            }else{
                $("#campfireSpeedI").css("display", "none");
            }
        }
        if(steelPlates > 3 && forgeSpeed < 2){
            $("#forgeSpeedI").prop("disabled", false);
            $("#forgeSpeedI").css("display", "block");
        }else{
            if(steelPlates > 0 && forgeSpeed < 2){
                $("#forgeSpeedI").prop("disabled", true);
                $("#forgeSpeedI").css("display", "block");
            }else{
                $("#forgeSpeedI").css("display", "none");
            }
        }
        if(copperWire > 7 && vaccumTubes > 1 && forgeSpeed < 6 && forgeSpeed == 2){
            $("#forgeSpeedII").prop("disabled", false);
            $("#forgeSpeedII").css("display", "block");
        }else{
            if(copperWire > 0 && vaccumTubes > 0 && forgeSpeed < 6 && forgeSpeed == 2){
                $("#forgeSpeedII").prop("disabled", true);
                $("#forgeSpeedII").css("display", "block");
            }else{
                $("#forgeSpeedII").css("display", "none");
            }
        }
        if(copperWire > 3 && steelPlates > 1 && lvChips > 0 && metalWorkshopSpeed < 2){
            $("#metalWorkshopSpeedI").prop("disabled", false);
            $("#metalWorkshopSpeedI").css("display", "block");
        }else{
            if(copperWire > 0 && steelPlates > 0 && lvChips > 0 && metalWorkshopSpeed < 2){
                $("#metalWorkshopSpeedI").prop("disabled", true);
                $("#metalWorkshopSpeedI").css("display", "block");
            }else{
                $("#metalWorkshopSpeedI").css("display", "none");
            }
        }
        if(copperWire > 7 && vaccumTubes > 2 && greenhouseSpeed < 2){
            $("#greenhouseSpeedI").prop("disabled", false);
            $("#greenhouseSpeedI").css("display", "block");
        }else{
            if(copperWire > 0 && vaccumTubes > 0 && greenhouseSpeed < 2){
                $("#greenhouseSpeedI").prop("disabled", true);
                $("#greenhouseSpeedI").css("display", "block");
            }else{
                $("#greenhouseSpeedI").css("display", "none");
            }
        }
        if(health <= 1){
            $("#gather").prop("disabled", true);
        }else{
            $("#gather").prop("disabled", false);
        }if(health <= 7 || huntingTool == false){
            $("#hunt").prop("disabled", true);
        }else{
            $("#hunt").prop("disabled", false);
        }if(health <= 5 || miningTool == false){
            $("#mine").prop("disabled", true);
        }else{
            $("#mine").prop("disabled", false);
        }if(health <= 1 || choppingTool == false){
            $("#chop").prop("disabled", true);
        }else{
            $("#chop").prop("disabled", false);
        }
    }
    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
    };
    function newLife(fullReset){
        minutes = 0;
        hours = 6;
        days = 1;
        weather = "Clear Skies";
        wheatTimer = -1;
        wheatReady = false;
        wheatTimer2 = -1;
        wheatReady2 = false;
        berriesTimer = -1;
        berriesReady = false;
        berriesTimer2 = -1;
        berriesReady2 = false;
        farmSpeed = 1;
        wheatTimerG = -1;
        wheatReadyG = false;
        berriesTimerG = -1;
        berriesReadyG = false;
        greenhouseSpeed = 1;
        bricksTimer = -1;
        bricksReady = false;
        breadTimer = -1;
        breadReady = false;
        campfireSpeed = 1;
        glassTimer = -1;
        glassReady = false;
        copperTimer = -1;
        copperReady = false;
        ironTimer = -1;
        ironReady = false;
        steelTimer = -1;
        steelReady = false;
        forgeSpeed = 1;
        copperWireTimer = -1;
        copperWireReady = false;
        steelPlatesTimer = -1;
        steelPlatesReady = false;
        vaccumTubeTimer = -1;
        vaccumTubeReady = false;
        lvChipTimer = -1;
        lvChipReady = false;
        metalWorkshopSpeed = 1;
        crushStoneTimer = -1;
        crushStoneReady = false;
        crusherSpeed = 1;
        hunger = 20;
        maxHunger = 20;
        health = 20;
        maxHealth = 20;
        xp = 0;
        level = 0;
        sticks = 1;
        sand = 0;
        clay = 0;
        bricks = 0;
        salt = 0;
        sugar = 0;
        berries = 0;
        apples = 0;
        wheat = 0;
        seeds = 0;
        bread = 0;
        wood = 0;
        charcoal = 0;
        meat = 0;
        cookedMeat = 0;
        saltedMeat = 0;
        berryJam = 0;
        applePie = 0;
        leather = 0;
        sugarCane = 0;
        stone = 0;
        copperOre = 0;
        copperIngots = 0;
        annealedCopperIngots = 0;
        coal = 0;
        ironOre = 0;
        ironIngots = 0;
        steelIngots = 0;
        aluminumOre = 0;
        aluminumIngots = 0;
        glass = 0;
        copperWire = 0;
        annealedCopperWire = 0;
        steelPlates = 0;
        vaccumTubes = 0;
        lvChips = 0;
        if(fullReset){
            summitExploration = 0;
            summitGmultiPower = 1;
            summitGmultiCost = 1;
            summitHmultiPower = 1;
            summitHmultiCost = 1;
            summitMmultiPower = 1;
            summitMmultiCost = 1;
            summitCmultiPower = 1;
            summitCmultiCost = 1;
            forestryUnlocked = false;
            foodUnlocked = false;
            miningUnlocked = false;
            electronicsUnlocked = false;
            farmUnlocked = false;
        }
        Gpower = 1;
        Hpower = 0;
        Mpower = 0;
        Cpower = 0;
        artifact = false;
        hornOfPlenty = false;
        miningTool = false;
        sharpStone = false;
        pointyStick = false;
        copperPickaxe = false;
        ironPickaxe = false;
        choppingTool = false;
        stoneAxe = false;
        copperAxe = false;
        ironAxe = false;
        strawBasket = false;
        copperKnife = false;
        huntingTool = false;
        stoneSpear = false;
        forge = false;
        metalWorkshop = false;
        campfire = false;
        greenhouse = false;
        crusher = false;
        extraWheatPlot = false;
        extraBerriesPlot = false;
        extraCrusher = false;
        forgeAnnealing = false;

        console.log(forestryUnlocked);

        $(".content").children().css("display", "block");
        $(".dead").css("display", "none");
        $(".craftingBook").css("display", "none");
        $(".biomeInfo").css("display", "none");
        $(".summitMenu").css("display", "none");
        $(".inventory").css("display", "flex");
        $(".flexBarContainer").css("display", "flex");
        if (!forestryUnlocked) $(".flexInvF, .hide").css("display", "none");
        if (!foodUnlocked) $(".flexInvC").css("display", "none");
        if (!miningUnlocked) $(".flexInvM").css("display", "none");
        if (!electronicsUnlocked) $(".flexInvE").css("display", "none");
        if (!(pointyStick || strawBasket)) $(".flexInvT").css("display", "none");
        if (!farmUnlocked) $("#farm").css("display", "none");
        updateHunger(0);
        updateHealth(0);
        updateXp(0);
        changeInventory();
        changeMarket();
        localStorage.clear();
        randomBiome();
        switchMenu("main");
        $("#hunt").css("display", "none");
        $("#mine").css("display", "none");
        $("#chop").css("display", "none");
        $('#impexpField').val("");
    }
    function save() {
        const gameData = {
            hunger, maxHunger, health, maxHealth, xp, level, minutes, hours, days, weather, biome,
            farmSpeed, greenhouseSpeed, campfireSpeed, forgeSpeed, metalWorkshopSpeed, crusherSpeed,
            sticks, sand, clay, bricks, wood, leather, sugarCane, charcoal,  
            meat, cookedMeat, saltedMeat, sugar, berries, berryJam, apples, wheat, bread, seeds, salt, 
            stone, copperOre, copperIngots, coal, ironOre, ironIngots, steelIngots, annealedCopperIngots, 
            aluminumOre, aluminumIngots, glass, copperWire, annealedCopperWire, steelPlates, vaccumTubes, lvChips,
            artifact, hornOfPlenty, miningTool, pointyStick, sharpStone, copperPickaxe, ironPickaxe,
            choppingTool, stoneAxe, copperAxe, ironAxe, strawBasket, copperKnife, huntingTool, stoneSpear,
            Gpower, Hpower, Mpower, Cpower, campfire, forge, metalWorkshop, greenhouse, crusher, farmUnlocked, 
            extraWheatPlot, extraBerriesPlot, extraCrusher, forgeAnnealing, forestryUnlocked, foodUnlocked, miningUnlocked, electronicsUnlocked, 
            summitExploration, summitGmultiPower, summitGmultiCost, summitHmultiPower, summitHmultiCost, summitMmultiPower, summitMmultiCost, summitCmultiPower, summitCmultiCost
        };
    localStorage.setItem("save", JSON.stringify(gameData));
    return gameData
    }
    $("#export").click(function(){
        string = JSON.stringify(save());
        compressed = LZString.compressToBase64(string);
        $('#impexpField').val(compressed);
    });
    $("#import").click(function(){
        text = $('#impexpField').val();
        // Give Ten Ten All Items --> %*%#%#&%#&!((*%#*@
        if(text == "%*%#%#&%#&!((*%#*@"){
            sticks += 100;
            sand += 100;
            clay += 100;
            sugarCane += 100;
            bricks += 100;
            leather += 100;
            wood += 100;
            charcoal += 100;
            salt += 100;
            sugar += 100;
            berries += 100;
            berryJam += 100;
            apples += 100;
            wheat += 100;
            bread += 100;
            seeds += 100;
            meat += 100;
            cookedMeat += 100;
            saltedMeat += 100;
            applePie += 100;
            stone += 100;
            copperOre += 100;
            copperIngots += 100;
            annealedCopperIngots += 100;
            coal += 100;
            ironOre += 100;
            ironIngots += 100;
            steelIngots += 100;
            aluminumOre += 100;
            aluminumIngots += 100;
            glass += 100;
            copperWire += 100;
            annealedCopperWire += 100;
            steelPlates += 100;
            aluminumPlates += 100;
            vaccumTubes += 100;
            lvChips += 100;
        }
        else if(text){
            decompressed = LZString.decompressFromBase64(text);
            localStorage.save = decompressed;
            loadGame();
        }
        changeInventory();
        changeMarket();
    });
    $("#saveGame").click(function(){
        save();
    });
    function loadGame() {
    const savedData = localStorage.getItem("save");
    
    if (!savedData) return;

    try {
        const gameData = JSON.parse(savedData);

        hunger = gameData.hunger;
        maxHunger = gameData.maxHunger;
        if(gameData.health) {health = gameData.health};
        if(gameData.maxHealth) {maxHealth = gameData.maxHealth};
        xp = gameData.xp;
        if(gameData.level) {level = gameData.level};
        minutes = gameData.minutes;
        hours = gameData.hours;
        days = gameData.days;
        weather = gameData.weather;
        biome = gameData.biome;

        if(gameData.farmSpeed) {farmSpeed = gameData.farmSpeed};
        if(gameData.greenhouseSpeed){greenhouseSpeed = gameData.greenhouseSpeed};
        if(gameData.campfireSpeed){campfireSpeed = gameData.campfireSpeed};
        if(gameData.forgeSpeed){forgeSpeed = gameData.forgeSpeed};
        if(gameData.metalWorkshopSpeed){metalWorkshopSpeed = gameData.metalWorkshopSpeed};
        if(gameData.crusherSpeed){crusherSpeed = gameData.crusherSpeed};
        
        sticks = gameData.sticks;
        sand = gameData.sand;
        clay = gameData.clay;
        bricks = gameData.bricks;
        if(gameData.leather) {leather = gameData.leather};
        if(gameData.sugarCane) {sugarCane = gameData.sugarCane};
        if(gameData.charcoal) {charcoal = gameData.charcoal};
        wood = gameData.wood;

        if(gameData.meat) {meat = gameData.meat};
        if(gameData.cookedMeat) {cookedMeat = gameData.cookedMeat};
        if(gameData.saltedMeat) {saltedMeat = gameData.saltedMeat};
        if(gameData.salt) {salt = gameData.salt};
        if(gameData.sugar) {sugar = gameData.sugar};
        if(gameData.berryJam) {berryJam = gameData.berryJam};
        berries = gameData.berries;
        apples = gameData.apples;
        wheat = gameData.wheat;
        seeds = gameData.seeds;
        bread = gameData.bread;

        stone = gameData.stone;
        copperOre = gameData.copperOre;
        copperIngots = gameData.copperIngots;
        if (gameData.annealedCopperIngots) {annealedCopperIngots = gameData.annealedCopperIngots};
        coal = gameData.coal;
        ironOre = gameData.ironOre;
        ironIngots = gameData.ironIngots;
        steelIngots = gameData.steelIngots;
        aluminumOre = gameData.aluminumOre;
        aluminumIngots = gameData.aluminumIngots;

        glass = gameData.glass;
        copperWire = gameData.copperWire;
        if (gameData.annealedCopperWire) {annealedCopperWire = gameData.annealedCopperWire};
        steelPlates = gameData.steelPlates;
        vaccumTubes = gameData.vaccumTubes;
        if (gameData.lvChips) {lvChips = gameData.lvChips};

        artifact = gameData.artifact;
        hornOfPlenty = gameData.hornOfPlenty;
        miningTool = gameData.miningTool;
        pointyStick = gameData.pointyStick;
        sharpStone = gameData.sharpStone;
        copperPickaxe = gameData.copperPickaxe;
        ironPickaxe = gameData.ironPickaxe;
        choppingTool = gameData.choppingTool;
        stoneAxe = gameData.stoneAxe;
        copperAxe = gameData.copperAxe;
        ironAxe = gameData.ironAxe;
        strawBasket = gameData.strawBasket;
        copperKnife = gameData.copperKnife;
        if(gameData.huntingTool) {huntingTool = gameData.huntingTool};
        if(gameData.stoneSpear) {stoneSpear = gameData.stoneSpear};
        
        Gpower = gameData.Gpower;
        if(gameData.Hpower) {Hpower = gameData.Hpower};
        Mpower = gameData.Mpower;
        Cpower = gameData.Cpower;
        campfire = gameData.campfire;
        forge = gameData.forge;
        metalWorkshop = gameData.metalWorkshop;
        greenhouse = gameData.greenhouse;
        crusher = gameData.crusher;
        extraWheatPlot = gameData.extraWheatPlot;
        extraBerriesPlot = gameData.extraBerriesPlot;
        extraCrusher = gameData.extraCrusher;
        if(gameData.forgeAnnealing) {forgeAnnealing = gameData.forgeAnnealing};

        forestryUnlocked = gameData.forestryUnlocked;
        if(gameData.foodUnlocked) {foodUnlocked = gameData.foodUnlocked};
        miningUnlocked = gameData.miningUnlocked;
        electronicsUnlocked = gameData.electronicsUnlocked;
        farmUnlocked = gameData.farmUnlocked;

        summitExploration = gameData.summitExploration;
        if(gameData.summitGmultiPower) summitGmultiPower = gameData.summitGmultiPower;
        if(gameData.summitGmultiCost) summitGmultiCost = gameData.summitGmultiCost;
        if(gameData.summitHmultiPower) summitHmultiPower = gameData.summitHmultiPower;
        if(gameData.summitHmultiCost) summitHmultiCost = gameData.summitHmultiCost;
        if(gameData.summitMmultiPower) summitMmultiPower = gameData.summitMmultiPower;
        if(gameData.summitMmultiCost) summitMmultiCost = gameData.summitMmultiCost;
        if(gameData.summitCmultiPower) summitCmultiPower = gameData.summitCmultiPower;
        if(gameData.summitCmultiCost) summitCmultiCost = gameData.summitCmultiCost;

        updateHunger(0);
        updateHealth(0);
        updateXp(0);
        changeInventory();
        changeMarket();
        console.log("Game loaded successfully!");

    } catch (error) {
        console.error("Error loading game:", error);
    }


        if (campfire) $("#campfireCraft").css("display", "inline");
        if (forge) $("#forgeCraft").css("display", "inline");
        if (metalWorkshop) $("#metalWorkshopCraft").css("display", "inline");
        if (greenhouse) $("#viewGreenhouse").css("display", "inline");
        if (crusher) $("#viewCrusher").css("display", "inline");
        if (pointyStick) {
            $(".flexInvT").css("display", "block");
            $("#mine").css("display", "inline");
        }
        if (stoneAxe) $("#chop").css("display", "inline");
        if (stoneSpear) $("#hunt").css("display", "inline");
        if (strawBasket) $(".flexInvT").css("display", "block");
        console.log(forestryUnlocked);
        if (forestryUnlocked) $(".flexInvF, .hide").css("display", "block");
        if (foodUnlocked) $(".flexInvC").css("display", "block");
        if (miningUnlocked) $(".flexInvM").css("display", "block");
        if (electronicsUnlocked) $(".flexInvE").css("display", "block");
        if (farmUnlocked) $("#farm").css("display", "inline");
        if (biome == "NULL") randomBiome();
    }
    if(localStorage.getItem("save")) {
    loadGame();
}
});