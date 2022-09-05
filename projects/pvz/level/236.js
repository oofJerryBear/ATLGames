﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper, oFlamesMushroom], 
    ZName: [oZombie, oConeheadZombie, oBucketheadZombie, oCXZombie, oJackinTheBoxZombie, oFootballZombie, oCConeheadZombie, oPoleVaultingZombie, oCPoleVaultingZombie, oHeiFootballZombie, oXBZombie, oCZombie, oCBucketheadZombie, oMustacheZombie, oTrashZombie, oJX, oNewspaperZombie, oCNewspaperZombie, oCJackinTheBoxZombie, oCFootballZombie, oZZ, othugZombie, oJY, oZomboni],
    PicArr: function() {
        return ["images/interface/backgroundwall.jpg"]
    } (),
    backgroundImage: "images/interface/backgroundwall.jpg",
    CanSelectCard: 1,
    LF: [0, 3, 3, 3, 3, 3],
    DKind: 1,
    InitLawnMower: function() {
        CustomSpecial(oCleaner, 1, -1)
        CustomSpecial(oCleaner, 2, -1)
        CustomSpecial(oCleaner, 3, -1)
        CustomSpecial(oCleaner, 4, -1)
        CustomSpecial(oCleaner, 5, -1)
    },
    LevelName: "常青之塔 86层",
    LvlEName: 236,
    SunNum: 9900,
    CanSelectCard: 1,
    StartGameMusic: "The Great Wall",
    LargeWaveFlag: {
        4 : $("imgFlag3"),
        8 : $("imgFlag2"),
        12 : $("imgFlag1")
    }
},
{
    AZ: [[oZombie, 1, 1], [oConeheadZombie, 1, 2], [oBucketheadZombie, 1, 3], [oCXZombie, 1, 4], [oJackinTheBoxZombie, 1, 5], [oFootballZombie, 1, 6],  [oCConeheadZombie, 1, 7], [oPoleVaultingZombie, 1, 8], [oHeiFootballZombie, 1, 9], [oCZombie, 1, 10], [oXBZombie, 1, 11], [oCBucketheadZombie, 1, 12], [oMustacheZombie, 1, 11], [oTrashZombie, 1, 10], [oJX, 1, 9], [oNewspaperZombie, 1, 8], [oCJackinTheBoxZombie, 1, 7], [oCFootballZombie, 1, 6], [oCNewspaperZombie, 1, 5], [oCPoleVaultingZombie, 1, 4], [oZZ, 1, 3], [othugZombie, 1, 2], [oJY, 1, 1], [oZomboni, 1, 2]],
    FlagNum: 12,
    FlagToSumNum: {
        a1: [127, 241, 284, 325],
        a2: [127, 241, 284, 325]
    },
    FlagToMonitor: {
        3 : [ShowLargeWave, 0],
        7 : [ShowLargeWave, 0],
        11 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(237)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});