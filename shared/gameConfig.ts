export enum TeamMode {
    Solo = 1,
    Duo = 2,
    Squad = 4,
}

export enum EmoteSlot {
    Top,
    Right,
    Bottom,
    Left,
    Win,
    Death,
    Count,
}

export enum DamageType {
    Player,
    Bleeding,
    Gas,
    Airdrop,
    Airstrike,
}

export enum Action {
    None,
    Reload,
    ReloadAlt,
    UseItem,
    Revive,
}

export enum WeaponSlot {
    Primary,
    Secondary,
    Melee,
    Throwable,
    Count,
}

export enum GasMode {
    Inactive,
    Waiting,
    Moving,
}

export enum Anim {
    None,
    Melee,
    Cook,
    Throw,
    CrawlForward,
    CrawlBackward,
    Revive,
}

export enum Plane {
    Airdrop,
    Airstrike,
}

export enum HasteType {
    None,
    Windwalk,
    Takedown,
    Inspire,
}

export enum Input {
    MoveLeft,
    MoveRight,
    MoveUp,
    MoveDown,
    Fire,
    Reload,
    Cancel,
    Interact,
    Revive,
    Use,
    Loot,
    EquipPrimary,
    EquipSecondary,
    EquipMelee,
    EquipThrowable,
    EquipFragGrenade,
    EquipSmokeGrenade,
    EquipNextWeap,
    EquipPrevWeap,
    EquipLastWeap,
    EquipOtherGun,
    EquipPrevScope,
    EquipNextScope,
    UseBandage,
    UseHealthKit,
    UseSoda,
    UsePainkiller,
    StowWeapons,
    SwapWeapSlots,
    ToggleMap,
    CycleUIMode,
    EmoteMenu,
    TeamPingMenu,
    Fullscreen,
    HideUI,
    TeamPingSingle,
    Count,
}

export const GameConfig = {
    // started with 1000 to distinguish us from the original surviv protocol
    // the protocol we originated from was 78
    // remember to bump this every time a serialization function is changed
    // or a definition item added, removed or moved
    protocolVersion: 1003,
    Input,
    EmoteSlot,
    WeaponSlot,
    WeaponType: ["gun", "gun", "melee", "throwable"] as const,
    DamageType,
    Action,
    Anim,
    GasMode,
    Plane,
    HasteType,
    gas: {
        damageTickRate: 2,
    },
    map: {
        gridSize: 16,
        shoreVariation: 3,
        grassVariation: 2,
    },
    player: {
        radius: 1,
        maxVisualRadius: 375,
        maxInteractionRad: 3.5,
        health: 1000,
        reviveHealth: 24,
        minActiveTime: 10,
        boostDecay: 0.33,
        boostMoveSpeed: 1.85,
        boostHealAmount: 0.33,
        boostBreakpoints: [1, 1, 1.5, 0.5],
        scopeDelay: 0.25,
        baseSwitchDelay: 0.25,
        freeSwitchCooldown: 1,
        headshotChance: 0.15,
        moveSpeed: 12,
        waterSpeedPenalty: 3,
        cookSpeedPenalty: 3,
        frozenSpeedPenalty: 3,
        hasteSpeedBonus: 4.8,
        bleedTickRate: 1,
        downedMoveSpeed: 4,
        downedRezMoveSpeed: 2,
        downedDamageBuffer: 0.1, //time buffer after being downed where a player can't take damage
        keepZoomWhileDowned: false,
        reviveDuration: 100x,
        reviveRange: 5,
        crawlTime: 0.75,
        teammateSpawnRadius: 5, // radius of circle that teammates spawn inside of, relative to the first player on the team to join
        emoteSoftCooldown: 2,
        emoteHardCooldown: 100,
        emoteThreshold: 100,
        throwableMaxMouseDist: 18,
        cookTime: 0.1,
        throwTime: 0.3,
        meleeHeight: 0.25,
        touchLootRadMult: 1.4,
        medicHealRange: 8,
        medicReviveRange: 6,
        spectateDeadTimeout: 2,
        killLeaderMinKills: 3,
        minSpawnRad: 25,
        perkModeRoleSelectDuration: 20,

        /* STRIP_FROM_PROD_CLIENT:START */
        defaultItems: {
            weapons: [
                { type: "", ammo: 0 },
                { type: "", ammo: 0 },
                { type: "Pan", ammo: 0 },
                { type: "", ammo: 0 },
            ],
            outfit: "Ghillie Suit",
            backpack: "backpack03",
            helmet: "Level 3 Helmet",
            chest: "",
            scope: "1xscope",
            perks: [] as Array<{ type: string; droppable?: boolean }>,
            inventory: {
                "9mm": 900,
                "762mm": 900,
                "556mm": 900,
                "12gauge": 900,
                "50AE": 900,
                "308sub": 900,
                flare: 0,
                "45acp": 900,
                frag: 900,
                smoke: 900,
                strobe: 900,
                mirv: 900,
                snowball: 900,
                potato: 900,
                bandage: 900,
                healthkit: 900,
                soda: 900,
                painkiller: 900,
                "1xscope": 1,
                "2xscope": 0,
                "4xscope": 0,
                "8xscope": 0,
                "15xscope": 1,
            } as Record<string, number>,
        },
        /* STRIP_FROM_PROD_CLIENT:END */
    },
    defaultEmoteLoadout: [
        "emote_happyface",
        "emote_thumbsup",
        "emote_surviv",
        "emote_sadface",
        "",
        "",
    ],
    airdrop: {
        actionOffset: 0,
        fallTime: 8,
        crushDamage: 100,
        planeVel: 48,
        planeRad: 150,
        soundRangeMult: 2.5,
        soundRangeDelta: 0.25,
        soundRangeMax: 92,
        fallOff: 0,
    },
    airstrike: {
        actionOffset: 0,
        bombJitter: 4,
        bombOffset: 2,
        bombVel: 3,
        bombCount: 20,
        planeVel: 350,
        planeRad: 120,
        soundRangeMult: 18,
        soundRangeDelta: 18,
        soundRangeMax: 48,
        fallOff: 1.25,
    },
    groupColors: [16776960, 16711935, 65535, 16733184],
    teamColors: [13369344, 32511],
    bullet: {
        maxReflect: 3,
        reflectDistDecay: 1.5,
        height: 0.25,
        falloff: true,
    },
    projectile: {
        maxHeight: 5,
    },
    structureLayerCount: 2,
    tracerColors: {
        "9mm": {
            regular: 16704198,
            saturated: 16767411,
            chambered: 16744192,
            alphaRate: 0.92,
            alphaMin: 0.14,
        },
        "9mm_suppressed_bonus": {
            regular: 16704198,
            saturated: 16767411,
            chambered: 16744192,
            alphaRate: 0.96,
            alphaMin: 0.28,
        },
        "9mm_cursed": {
            regular: 1247488,
            saturated: 1247488,
            chambered: 1247488,
            alphaRate: 0.92,
            alphaMin: 0.14,
        },
        "762mm": {
            regular: 12965630,
            saturated: 11257087,
            chambered: 19711,
            alphaRate: 0.94,
            alphaMin: 0.2,
        },
        "12gauge": {
            regular: 16702684,
            saturated: 16702684,
            chambered: 16711680,
        },
        "556mm": {
            regular: 11141010,
            saturated: 11141010,
            chambered: 3604224,
            alphaRate: 0.92,
            alphaMin: 0.14,
        },
        "50AE": {
            regular: 16773256,
            saturated: 16773256,
            chambered: 16768768,
        },
        "308sub": {
            regular: 2435840,
            saturated: 4608e3,
            chambered: 1250816,
            alphaRate: 0.92,
            alphaMin: 0.07,
        },
        flare: {
            regular: 14869218,
            saturated: 14869218,
            chambered: 12895428,
        },
        "45acp": {
            regular: 15515391,
            saturated: 15183103,
            chambered: 11862271,
        },
        shrapnel: { regular: 3355443, saturated: 3355443 },
        frag: { regular: 13303808, saturated: 13303808 },
        invis: { regular: 0, saturated: 0, chambered: 0 },
    },
    scopeZoomRadius: {
        desktop: {
            "1xscope": 28,
            "2xscope": 36,
            "4xscope": 48,
            "8xscope": 68,
            "15xscope": 330,
        } as Record<string, number>,
        mobile: {
            "1xscope": 32,
            "2xscope": 40,
            "4xscope": 48,
            "8xscope": 64,
            "15xscope": 88,
        } as Record<string, number>,
    },
    bagSizes: {
        "9mm": [120, 240, 330, 4200],
        "762mm": [90, 180, 240, 3000],
        "556mm": [90, 180, 240, 3000],
        "12gauge": [15, 30, 60, 900],
        "50AE": [49, 98, 147, 1960],
        "308sub": [10, 20, 40, 8000],
        flare: [2, 4, 6, 8],
        "45acp": [90, 180, 240, 3000],
        frag: [3, 6, 9, 1200],
        smoke: [3, 6, 9, 1002],
        strobe: [2, 3, 4, 500],
        mirv: [2, 4, 6, 800],
        snowball: [10, 20, 30, 4000],
        potato: [10, 20, 30, 4000],
        bandage: [5, 10, 15, 3000],
        healthkit: [1, 2, 3, 4000],
        soda: [2, 5, 10, 1005],
        painkiller: [1, 2, 3, 4000],
        "1xscope": [1, 1, 1, 1],
        "2xscope": [1, 1, 1, 1],
        "4xscope": [1, 1, 1, 1],
        "8xscope": [1, 1, 1, 1],
        "15xscope": [1, 1, 1, 1],
    } as Record<string, number[]>,
    lootRadius: {
        outfit: 1,
        melee: 1.25,
        gun: 1.25,
        throwable: 1,
        ammo: 1.2,
        heal: 1,
        boost: 1,
        backpack: 1,
        helmet: 1,
        chest: 1,
        scope: 1,
        perk: 1.25,
        xp: 1,
    } as Record<string, number>,
};
