// MenuLanguage.tsx - Sistema completo de traducciones
"use client"

import { useLanguage } from '../../components/LanguageContext'

export type MenuSectionId =
    | "shots-ruso"
    | "shots-flameados"
    | "cocteles-flameados"
    | "cocteles-cerveza"
    | "cervezas"
    | "cervezas-artesanales"
    | "jarras-1l"
    | "jarras-2l"
    | "jarras-3l"
    | "sin-alcohol"
    | "aguas-gaseosas"
    | "long-drinks"
    | "especiales"
    | "bebidas-calientes"
    | "licores"

// Tipos para las traducciones del menú
type MenuTranslationKeys =
    | 'hero.title'
    | 'hero.subtitle'
    | 'hero.downloadButton'
    | 'footer.pages'
    | 'footer.hours'
    | 'footer.openNow'
    | 'footer.closedNow'
    | 'footer.currentTime'
    | 'footer.monday'
    | 'footer.tuesday'
    | 'footer.wednesday'
    | 'footer.thursday'
    | 'footer.friday'
    | 'footer.saturday'
    | 'footer.sunday'
    | 'footer.closed'
    | 'footer.description'
    | 'footer.rights'
    | 'whatsapp.reservationMessage'

// Interface para items del menú
export interface MenuItem {
    name: string
    description: string
    price: string
}

// Interface para secciones del menú
export interface MenuSection {
    id: MenuSectionId
    title: string
    items: MenuItem[]
    animationDirection: "left" | "right"
    image: string
    imageSize?: {
        width: number
        height: number
    }
}

// Traducciones de títulos de secciones
const sectionTitles = {
    es: {
        "shots-ruso": "CÓCTELES FLAMEADOS",
        "shots-flameados": "SHOTS FLAMEADOS",
        "cocteles-flameados": "SHOTS DEL RUSO",
        "cocteles-cerveza": "CÓCTELES CON CERVEZA",
        "cervezas": "CERVEZAS",
        "cervezas-artesanales": "CERVEZAS ARTESANALES",
        "jarras-1l": "JARRAS 1 LITRO",
        "jarras-2l": "JARRAS 2 LITROS",
        "jarras-3l": "JARRAS 3 LITROS",
        "sin-alcohol": "CÓCTELES SIN ALCOHOL",
        "aguas-gaseosas": "AGUAS Y GASEOSAS",
        "long-drinks": "LONG DRINKS",
        "especiales": "ESPECIALES",
        "bebidas-calientes": "BEBIDAS CALIENTES",
        "licores": "LICORES"


    },
    en: {
        "shots-ruso": "FLAMING COCKTAILS",
        "shots-flameados": "FLAMING SHOTS",
        "cocteles-flameados": "RUSO SHOTS",
        "cocteles-cerveza": "BEER COCKTAILS",
        "cervezas": "BEERS",
        "cervezas-artesanales": "CRAFT BEERS",
        "jarras-1l": "1 LITER JUGS",
        "jarras-2l": "2 LITER JUGS",
        "jarras-3l": "3 LITER JUGS",
        "sin-alcohol": "NON-ALCOHOLIC COCKTAILS",
        "aguas-gaseosas": "WATER & SODAS",
        "long-drinks": "LONG DRINKS",
        "especiales": "SPECIALS",
        "bebidas-calientes": "HOT DRINKS",
        "licores": "SPIRITS"
    },
    ru: {
        "shots-ruso": "ПЛАМЕННЫЕ КОКТЕЙЛИ",
        "shots-flameados": "ПЛАМЕННЫЕ ШОТЫ",
        "cocteles-flameados": "ШОТЫ РУСО",
        "cocteles-cerveza": "КОКТЕЙЛИ С ПИВОМ",
        "cervezas": "ПИВО",
        "cervezas-artesanales": "КРАФТОВОЕ ПИВО",
        "jarras-1l": "КУВШИНЫ 1 ЛИТР",
        "jarras-2l": "КУВШИНЫ 2 ЛИТРА",
        "jarras-3l": "КУВШИНЫ 3 ЛИТРА",
        "sin-alcohol": "БЕЗАЛКОГОЛЬНЫЕ КОКТЕЙЛИ",
        "aguas-gaseosas": "ВОДА И ГАЗИРОВКА",
        "long-drinks": "ЛОНГ ДРИНКИ",
        "especiales": "СПЕЦИАЛЬНЫЕ",
        "bebidas-calientes": "ГОРЯЧИЕ НАПИТКИ",
        "licores": "КРЕПКИЕ НАПИТКИ"
    }
} as const

// Traducciones completas de items individuales del menú
const menuItemTranslations = {
    es: {
        // CÓCTELES FLAMEADOS
        "FERRARI": { name: "FERRARI", description: "RON, TRIPLE SEC, BLUE CURACAO, GRANADINA" },
        "LAMBORGHINI": { name: "LAMBORGHINI", description: "VODKA, LICOR DE CAFÉ, IRISH CREAM, BLUE CURACAO" },
        "CASCO DE INGENIERO CIVIL": { name: "CASCO DE INGENIERO CIVIL", description: "TEQUILA, BLUE CURACAO, IRISH CREAM, VODKA Y TRIPLE SEC" },
        "LÁGRIMA DE CULEBRA": { name: "LÁGRIMA DE CULEBRA", description: "TEQUILA, LIMÓN FRESCO Y LICOR DE CAFÉ" },
        "CHERNOBYL": { name: "CHERNOBYL", description: "VODKA, TEQUILA, RON, WHISKY, SPRITE, COCA-COLA Y GRANADINA" },
        "LUCES NAVIDEÑAS": { name: "LUCES NAVIDEÑAS", description: "RON, VODKA, BLUE CURAÇAO, VINO TINTO, IRISH CREAM, TRIPLE SEC, LICOR DE MENTA, LICOR AMARETTO Y GRANADINA" },
        "ABIAMO": { name: "ABIAMO", description: "VODKA, RON, GIN, TRIPLE SEC (MÉTODO: SOBRE UN EMBUDO)" },
        "LADA-14": { name: "LADA-14", description: "LICOR DE HIERBAS, GIN, VODKA Y LIMÓN FRESCO" },
        "INMORTAL CON FATALITY": { name: "INMORTAL CON FATALITY", description: "RON, TRIPLE SEC, GRANADINA, BLUE CURACAO, IRISH CREAM, LICOR DE MENTA, CERVEZA, VODKA, TEQUILA" },
        "SUPER FERRARI": { name: "SUPER FERRARI", description: "ABSENTA, BLUE CURACAO, GRANADINA, RON Y TRIPLE SEC" },
        "LAMBORGINI KALINA": { name: "LAMBORGINI KALINA", description: "RON, BLUE CURACAO, TEQUILA, GIN Y GRANADINA, METODO: TORRES DE COPAS FLAMEADAS" },

        // SHOTS FLAMEADOS
        "TNT": { name: "TNT", description: "GIN, TEQUILA, VODKA, RON" },
        "BUDA": { name: "BUDA", description: "VODKA, TEQUILA, RON, GIN, TRIPLE SEC Y GRANADINA" },
        "B-52": { name: "B-52", description: "VODKA, LICOR DE CAFÉ, IRISH CREAM" },
        "MEXICAN FLAG SHOT": { name: "MEXICAN FLAG SHOT", description: "TEQUILA, LICOR DE MENTA Y GRANADINA" },
        "SIN NOMBRE": { name: "SIN NOMBRE", description: "VODKA, BLUE CURACAO, IRISH CREAM Y GRANADINA" },
        "BESO NEGRO": { name: "BESO NEGRO", description: "RON, IRISH CREAM Y GRANADINA" },

        // SHOTS DEL RUSO
        "SIBERIANO": { name: "SIBERIANO", description: "VODKA Y LICOR DE MENTA" },
        "GATO VASILIY": { name: "GATO VASILIY", description: "GIN, LIMÓN FRESCO Y GRANADINA" },
        "LÍNEA DE BIKINI": { name: "LÍNEA DE BIKINI", description: "VODKA, LICOR DE CAFÉ Y FRUTILLA" },
        "VIENTO DE MENTA": { name: "VIENTO DE MENTA", description: "TEQUILA, LICOR DE MENTA Y BLUE CURACAO" },
        "BOLLARSKIY": { name: "BOLLARSKIY", description: "VODKA, TABASCO Y GRANADINA" },
        "TEQUILA AZUL": { name: "TEQUILA AZUL", description: "TEQUILA Y BLUE CURACAO" },
        "MEDUSA": { name: "MEDUSA", description: "RON, TRIPLE SEC, IRISH CREAM Y BLUE CURACAO" },
        "BANDERA ECUATORIANA": { name: "BANDERA ECUATORIANA", description: "VODKA, BLUE CURACAO, LICOR DE MARACUYÁ Y GRANADINA" },
        "BANDERA RUSA": { name: "BANDERA RUSA", description: "VODKA, BLUE CURACAO Y GRANADINA" },
        "SEMÁFORO (3 SHOTS)": { name: "SEMÁFORO (3 SHOTS)", description: "VODKA, LICOR DE MENTA, LICOR DE MARACUYÁ Y GRANADINA" },
        "QUÍMICO": { name: "QUÍMICO", description: "10 TUBOS DE ENSAYO, RECETA DE LA CASA" },

        // CÓCTELES CON CERVEZA
        "MICHELADA CLÁSICA": { name: "MICHELADA CLÁSICA", description: "CERVEZA CLUB, LIMÓN FRESCO, SAL, PIMIENTA, SALSA WORCESTERSHIPE Y TABASCO" },
        "MICHELADA MIX": { name: "MICHELADA MIX", description: "CERVEZA CLUB, LIMÓN FRESCO, SAL, PIMIENTA, SALSA WORCESTERSHIRE Y TABASCO, FRUTAS: FRESA, MORA, NARANJA, MARACUYA" },
        "MICHELADA CON TEQUILA": { name: "MICHELADA CON TEQUILA", description: "TEQUILA, CERVEZA CLUB, LIMÓN FRESCO, SAL, PIMIENTA, SALSA WORCESTERSHIRE Y TABASCO" },
        "BOMBA": { name: "BOMBA", description: "CERVEZA CLUB, BLUE CURACAO, TRIPLE SEC Y GRANADINA" },
        "FUEGO": { name: "FUEGO", description: "CERVEZA CLUB, AMARETTO Y RON" },
        "SUBMARINO RUSO": { name: "SUBMARINO RUSO", description: "CERVEZA CLUB Y VODKA" },
        "SUBMARINO MEXICANO": { name: "SUBMARINO MEXICANO", description: "CERVEZA CLUB Y TEQUILA" },
        "CERVEZA AZUL": { name: "CERVEZA AZUL", description: "CERVEZA CLUB, TRIPLE SEC, TEQUILA Y BLUE CURACAO" },
        "TURBO BIELA RUSA": { name: "TURBO BIELA RUSA", description: "CERVEZA CLUB, VODKA, TRIPLE SEC, GIN, RON, TEQUILA" },
        "NEGRO CAZADOR": { name: "NEGRO CAZADOR", description: "LICOR DE HIERBAS Y CERVEZA NEGRA" },
        "MICHELADA MEXICANA ORIGINAL": { name: "MICHELADA MEXICANA ORIGINAL", description: "CERVEZA CORONA, LIMÓN FRESCO, TABASCO Y TEQUILA" },

        // CERVEZAS
        "HEINEKEN (330ML)": { name: "HEINEKEN (330ML)", description: "" },
        "CLUB (550ML)": { name: "CLUB (550ML)", description: "" },
        "CORONA EXTRA (355ML)": { name: "CORONA EXTRA (355ML)", description: "" },
        "STELLA ARTOIS (330ML)": { name: "STELLA ARTOIS (330ML)", description: "" },

        // CERVEZAS ARTESANALES
        "DRY STOUT (500 ML)": { name: "DRY STOUT (500 ML)", description: "" },
        "RED IPA (500 ML)": { name: "RED IPA (500 ML)", description: "" },
        "BELGIAN TRIPLE (500 ML)": { name: "BELGIAN TRIPLE (500 ML)", description: "" },
        "CREAM ALE (500 ML)": { name: "CREAM ALE (500 ML)", description: "" },

        // JARRAS (todas las jarras tienen los mismos nombres)
        "CUBA LIBRE": { name: "CUBA LIBRE", description: "" },
        "DESTORNILLADOR": { name: "DESTORNILLADOR", description: "" },
        "VINO HERVIDO": { name: "VINO HERVIDO", description: "" },
        "MOJITO CLÁSICO": { name: "MOJITO CLÁSICO", description: "" },
        "CAIPIROSHKA": { name: "CAIPIROSHKA", description: "" },
        "GIN TONIC": { name: "GIN TONIC", description: "" },
        "MOSCU MULE": { name: "MOSCU MULE", description: "" },
        "SANGRÍA RUSA": { name: "SANGRÍA RUSA", description: "" },
        "LONG ISLAND ICE TEA": { name: "LONG ISLAND ICE TEA", description: "" },
        "PADRINO": { name: "PADRINO", description: "" },
        "MOJITO MIX": { name: "MOJITO MIX", description: "" },
        "HADA VERDE": { name: "HADA VERDE", description: "" },

        // CÓCTELES SIN ALCOHOL
        "LIMONADA DE FRUTILLA": { name: "LIMONADA DE FRUTILLA", description: "" },
        "BATMAN": { name: "BATMAN", description: "" },
        "MOJITO DE NARANJA": { name: "MOJITO DE NARANJA", description: "" },
        "PATITAS DE GATO": { name: "PATITAS DE GATO", description: "" },
        "PIÑA COLADA": { name: "PIÑA COLADA", description: "" },
        "PIÑA COLADA DE FRUTILLA": { name: "PIÑA COLADA DE FRUTILLA", description: "" },
        "JUGO DE NARANJA (NATURAL)": { name: "JUGO DE NARANJA (NATURAL)", description: "" },
        "JUGO DE PIÑA (NATURAL)": { name: "JUGO DE PIÑA (NATURAL)", description: "" },
        "TASA TÉ": { name: "TASA TÉ", description: "" },
        "CAFÉ AMERICANO": { name: "CAFÉ AMERICANO", description: "" },

        // AGUAS Y GASEOSAS
        "AGUA SIN GAS": { name: "AGUA SIN GAS", description: "" },
        "AGUA CON GAS": { name: "AGUA CON GAS", description: "" },
        "ENERGIZANTE": { name: "ENERGIZANTE", description: "" },
        "SPRITE": { name: "SPRITE", description: "" },
        "COCA-COLA": { name: "COCA-COLA", description: "" },

        // LONG DRINKS
        "TEQUILA SUNRISE": { name: "TEQUILA SUNRISE", description: "(TEQUILA, JUGO DE NARANJA, GRANADINA)" },
        "MARGARITA CLÁSICA": { name: "MARGARITA CLÁSICA", description: "(TEQUILA, LIMÓN FRESCO, TRIPLE SEC)" },
        "MARGARITA MIX": { name: "MARGARITA MIX", description: "(TEQUILA, LIMÓN FRESCO, TRIPLE SEC, FRUTAS: FRESA, MORA, NARANJA, MARACUYÁ)" },
        "WHITE RUSSIAN": { name: "WHITE RUSSIAN", description: "(VODKA, LICOR DE CAFÉ, IRISH CREAM)" },
        "BLACK RUSSIAN": { name: "BLACK RUSSIAN", description: "(VODKA, LICOR DE CAFÉ)" },
        "CAIPIROSHKA MIX": { name: "CAIPIROSHKA MIX", description: "(VODKA, LIMÓN FRESCO, FRUTAS: FRESA, MORA, NARANJA, MARACUYÁ)" },
        "GINA": { name: "GINA", description: "(VODKA, MARACUYÁ, LIMÓN FRESCO, VINO TINTO)" },
        "BESO DE ARAÑA": { name: "BESO DE ARAÑA", description: "(VODKA, LICOR DE MELON, LIMON FRESCO)" },
        "VODKA TONIC": { name: "VODKA TONIC", description: "(VODKA, AGUA TONICA)" },
        "MOJITO": { name: "MOJITO", description: "(RON BLANCO, LIMÓN FRESCO, AZÚCAR, HIERBA BUENA)" },
        "DAIQUIRI": { name: "DAIQUIRI", description: "(RON, LIMÓN FRESCO, AZÚCAR, FRUTAS: FRESA, MORA, NARANJA, MARACUYÁ)" },
        "EL PADRINO": { name: "EL PADRINO", description: "(RED LABEL, LICOR AMARETTO)" },
        "LUCIFER": { name: "LUCIFER", description: "(RED LABEL, LICOR AMARETTO, JUGO DE NARANJA)" },
        "OLD FASHIONED": { name: "OLD FASHIONED", description: "(RED LABEL, ANGOSTURA BITTER, AZÚCAR, NARANJA)" },
        "WHISKY SOUR NEW YORK": { name: "WHISKY SOUR NEW YORK", description: "(RED LABEL, LIMÓN FRESCO, AZÚCAR, CLARA DE HUEVO)" },
        "RED GIN": { name: "RED GIN", description: "(GIN, MORA, HIERBA BUENA, JENGIBRE ALE)" },
        "NEGRONI": { name: "NEGRONI", description: "(GIN, CAMPARI, VERMOUTH ROSSO)" },

        // ESPECIALES
        "ZHUMIRINHA": { name: "ZHUMIRINHA", description: "(ZHUMIR, LIMÓN FRESCO, AZÚCAR)" },
        "MAI-TAI": { name: "MAI-TAI", description: "(RON BLANCO, RON NEGRO, JUGO DE NARANJA, PIÑA, LICOR AMARETTO, GRANADINA)" },
        "LONG ISLAND": { name: "LONG ISLAND", description: "(VODKA, GIN, TRIPLE SEC, TEQUILA, RON BLANCO, COCA-COLA)" },
        "K-12": { name: "K-12", description: "(GIN, TEQUILA, TRIPLE SEC, ENERGIZANTE, SPRITE)" },
        "JAGGER BOMB DE LA CASA": { name: "JAGGER BOMB DE LA CASA", description: "(LICOR DE HIERBAS, ENERGIZANTE)" },

        // BEBIDAS CALIENTES
        "CANELAZO": { name: "CANELAZO", description: "(AGUARDIENTE, NARANJILLA, CANELA)" },

        // LICORES
        "MERLOT": { name: "MERLOT", description: "" },
        "CABERNET SAUVIGNON": { name: "CABERNET SAUVIGNON", description: "" },
        "VINO BLANCO": { name: "VINO BLANCO", description: "" },
        "TANQUERAY": { name: "TANQUERAY", description: "" },
        "BEFEATER": { name: "BEFEATER", description: "" },
        "BOMBAY": { name: "BOMBAY", description: "" },
        "JOHNNY WALKER RED LABEL": { name: "JOHNNY WALKER RED LABEL", description: "" },
        "JOHNNY WALKER DOUBLE BLACK": { name: "JOHNNY WALKER DOUBLE BLACK", description: "" },
        "JACK DANIELS": { name: "JACK DANIELS", description: "(TENNESSEE-HONEY-FIRE)" },
        "BUCHANANS": { name: "BUCHANANS", description: "" },
        "CARÚPANO 18 AÑOS": { name: "CARÚPANO 18 AÑOS", description: "" },
        "DIPLOMÁTICO RESERVA EXCLUSIVA": { name: "DIPLOMÁTICO RESERVA EXCLUSIVA", description: "" },
        "ABUELO 7 AÑOS": { name: "ABUELO 7 AÑOS", description: "" },
        "ZACAPA 12 AÑOS": { name: "ZACAPA 12 AÑOS", description: "" },
        "RON DE LA CASA": { name: "RON DE LA CASA", description: "" },
        "ANTIOQUEÑO": { name: "ANTIOQUEÑO", description: "" },
        "CACHACA": { name: "CACHACA", description: "" },
        "PISCO  ": { name: "PISCO", description: "" }




    },
    en: {
        // FLAMING COCKTAILS
        "FERRARI": { name: "FERRARI", description: "RUM, TRIPLE SEC, BLUE CURACAO, GRENADINE" },
        "LAMBORGHINI": { name: "LAMBORGHINI", description: "VODKA, COFFEE LIQUEUR, IRISH CREAM, BLUE CURACAO" },
        "CASCO DE INGENIERO CIVIL": { name: "CIVIL ENGINEER HELMET", description: "TEQUILA, BLUE CURACAO, IRISH CREAM, VODKA AND TRIPLE SEC" },
        "LÁGRIMA DE CULEBRA": { name: "SNAKE'S TEAR", description: "TEQUILA, FRESH LIME AND COFFEE LIQUEUR" },
        "CHERNOBYL": { name: "CHERNOBYL", description: "VODKA, TEQUILA, RUM, WHISKY, SPRITE, COCA-COLA AND GRENADINE" },
        "LUCES NAVIDEÑAS": { name: "CHRISTMAS LIGHTS", description: "RUM, VODKA, BLUE CURAÇAO, RED WINE, IRISH CREAM, TRIPLE SEC, MINT LIQUEUR, AMARETTO LIQUEUR AND GRENADINE" },
        "ABIAMO": { name: "ABIAMO", description: "VODKA, RUM, GIN, TRIPLE SEC (METHOD: OVER A FUNNEL)" },
        "LADA-14": { name: "LADA-14", description: "HERBAL LIQUEUR, GIN, VODKA AND FRESH LIME" },
        "INMORTAL CON FATALITY": { name: "IMMORTAL WITH FATALITY", description: "RUM, TRIPLE SEC, GRENADINE, BLUE CURACAO, IRISH CREAM, MINT LIQUEUR, BEER, VODKA, TEQUILA" },
        "SUPER FERRARI": { name: "SUPER FERRARI", description: "ABSINTHE, BLUE CURACAO, GRENADINE, RUM AND TRIPLE SEC" },
        "LAMBORGINI KALINA": { name: "LAMBORGINI KALINA", description: "RUM, BLUE CURACAO, TEQUILA, GIN AND GRENADINE, METHOD: FLAMING GLASS TOWERS" },

        // FLAMING SHOTS
        "TNT": { name: "TNT", description: "GIN, TEQUILA, VODKA, RUM" },
        "BUDA": { name: "BUDDHA", description: "VODKA, TEQUILA, RUM, GIN, TRIPLE SEC AND GRENADINE" },
        "B-52": { name: "B-52", description: "VODKA, COFFEE LIQUEUR, IRISH CREAM" },
        "MEXICAN FLAG SHOT": { name: "MEXICAN FLAG SHOT", description: "TEQUILA, MINT LIQUEUR AND GRENADINE" },
        "SIN NOMBRE": { name: "NAMELESS", description: "VODKA, BLUE CURACAO, IRISH CREAM AND GRENADINE" },
        "BESO NEGRO": { name: "BLACK KISS", description: "RUM, IRISH CREAM AND GRENADINE" },

        // RUSO SHOTS
        "SIBERIANO": { name: "SIBERIAN", description: "VODKA AND MINT LIQUEUR" },
        "GATO VASILIY": { name: "CAT VASILIY", description: "GIN, FRESH LIME AND GRENADINE" },
        "LÍNEA DE BIKINI": { name: "BIKINI LINE", description: "VODKA, COFFEE LIQUEUR AND STRAWBERRY" },
        "VIENTO DE MENTA": { name: "MINT WIND", description: "TEQUILA, MINT LIQUEUR AND BLUE CURACAO" },
        "BOLLARSKIY": { name: "BOLLARSKIY", description: "VODKA, TABASCO AND GRENADINE" },
        "TEQUILA AZUL": { name: "BLUE TEQUILA", description: "TEQUILA AND BLUE CURACAO" },
        "MEDUSA": { name: "MEDUSA", description: "RUM, TRIPLE SEC, IRISH CREAM AND BLUE CURACAO" },
        "BANDERA ECUATORIANA": { name: "ECUADORIAN FLAG", description: "VODKA, BLUE CURACAO, PASSION FRUIT LIQUEUR AND GRENADINE" },
        "BANDERA RUSA": { name: "RUSSIAN FLAG", description: "VODKA, BLUE CURACAO AND GRENADINE" },
        "SEMÁFORO (3 SHOTS)": { name: "TRAFFIC LIGHT (3 SHOTS)", description: "VODKA, MINT LIQUEUR, PASSION FRUIT LIQUEUR AND GRENADINE" },
        "QUÍMICO": { name: "CHEMIST", description: "10 TEST TUBES, HOUSE RECIPE" },

        // BEER COCKTAILS
        "MICHELADA CLÁSICA": { name: "CLASSIC MICHELADA", description: "CLUB BEER, FRESH LIME, SALT, PEPPER, WORCESTERSHIRE SAUCE AND TABASCO" },
        "MICHELADA MIX": { name: "MICHELADA MIX", description: "CLUB BEER, FRESH LIME, SALT, PEPPER, WORCESTERSHIRE SAUCE AND TABASCO, FRUITS: STRAWBERRY, BLACKBERRY, ORANGE, PASSION FRUIT" },
        "MICHELADA CON TEQUILA": { name: "MICHELADA WITH TEQUILA", description: "TEQUILA, CLUB BEER, FRESH LIME, SALT, PEPPER, WORCESTERSHIRE SAUCE AND TABASCO" },
        "BOMBA": { name: "BOMB", description: "CLUB BEER, BLUE CURACAO, TRIPLE SEC AND GRENADINE" },
        "FUEGO": { name: "FIRE", description: "CLUB BEER, AMARETTO AND RUM" },
        "SUBMARINO RUSO": { name: "RUSSIAN SUBMARINE", description: "CLUB BEER AND VODKA" },
        "SUBMARINO MEXICANO": { name: "MEXICAN SUBMARINE", description: "CLUB BEER AND TEQUILA" },
        "CERVEZA AZUL": { name: "BLUE BEER", description: "CLUB BEER, TRIPLE SEC, TEQUILA AND BLUE CURACAO" },
        "TURBO BIELA RUSA": { name: "RUSSIAN TURBO BIELA", description: "CLUB BEER, VODKA, TRIPLE SEC, GIN, RUM, TEQUILA" },
        "NEGRO CAZADOR": { name: "BLACK HUNTER", description: "HERBAL LIQUEUR AND DARK BEER" },
        "MICHELADA MEXICANA ORIGINAL": { name: "ORIGINAL MEXICAN MICHELADA", description: "CORONA BEER, FRESH LIME, TABASCO AND TEQUILA" },

        // BEERS
        "HEINEKEN (330ML)": { name: "HEINEKEN (330ML)", description: "" },
        "CLUB (550ML)": { name: "CLUB (550ML)", description: "" },
        "CORONA EXTRA (355ML)": { name: "CORONA EXTRA (355ML)", description: "" },
        "STELLA ARTOIS (330ML)": { name: "STELLA ARTOIS (330ML)", description: "" },

        // CRAFT BEERS
        "DRY STOUT (500 ML)": { name: "DRY STOUT (500 ML)", description: "" },
        "RED IPA (500 ML)": { name: "RED IPA (500 ML)", description: "" },
        "BELGIAN TRIPLE (500 ML)": { name: "BELGIAN TRIPLE (500 ML)", description: "" },
        "CREAM ALE (500 ML)": { name: "CREAM ALE (500 ML)", description: "" },

        // JUGS
        "CUBA LIBRE": { name: "CUBA LIBRE", description: "" },
        "DESTORNILLADOR": { name: "SCREWDRIVER", description: "" },
        "VINO HERVIDO": { name: "MULLED WINE", description: "" },
        "MOJITO CLÁSICO": { name: "CLASSIC MOJITO", description: "" },
        "CAIPIROSHKA": { name: "CAIPIROSHKA", description: "" },
        "GIN TONIC": { name: "GIN TONIC", description: "" },
        "MOSCU MULE": { name: "MOSCOW MULE", description: "" },
        "SANGRÍA RUSA": { name: "RUSSIAN SANGRIA", description: "" },
        "LONG ISLAND ICE TEA": { name: "LONG ISLAND ICE TEA", description: "" },
        "PADRINO": { name: "GODFATHER", description: "" },
        "MOJITO MIX": { name: "MOJITO MIX", description: "" },
        "HADA VERDE": { name: "GREEN FAIRY", description: "" },

        // NON-ALCOHOLIC COCKTAILS
        "LIMONADA DE FRUTILLA": { name: "STRAWBERRY LEMONADE", description: "" },
        "BATMAN": { name: "BATMAN", description: "" },
        "MOJITO DE NARANJA": { name: "ORANGE MOJITO", description: "" },
        "PATITAS DE GATO": { name: "CAT PAWS", description: "" },
        "PIÑA COLADA": { name: "PIÑA COLADA", description: "" },
        "PIÑA COLADA DE FRUTILLA": { name: "STRAWBERRY PIÑA COLADA", description: "" },
        "JUGO DE NARANJA (NATURAL)": { name: "ORANGE JUICE (NATURAL)", description: "" },
        "JUGO DE PIÑA (NATURAL)": { name: "PINEAPPLE JUICE (NATURAL)", description: "" },
        "TASA TÉ": { name: "TEA CUP", description: "" },
        "CAFÉ AMERICANO": { name: "AMERICAN COFFEE", description: "" },

        // WATER & SODAS
        "AGUA SIN GAS": { name: "STILL WATER", description: "" },
        "AGUA CON GAS": { name: "SPARKLING WATER", description: "" },
        "ENERGIZANTE": { name: "ENERGY DRINK", description: "" },
        "SPRITE": { name: "SPRITE", description: "" },
        "COCA-COLA": { name: "COCA-COLA", description: "" },

        // LONG DRINKS
        "TEQUILA SUNRISE": { name: "TEQUILA SUNRISE", description: "(TEQUILA, ORANGE JUICE, GRENADINE)" },
        "MARGARITA CLÁSICA": { name: "CLASSIC MARGARITA", description: "(TEQUILA, FRESH LIME, TRIPLE SEC)" },
        "MARGARITA MIX": { name: "MARGARITA MIX", description: "(TEQUILA, FRESH LIME, TRIPLE SEC, FRUITS: STRAWBERRY, BLACKBERRY, ORANGE, PASSION FRUIT)" },
        "WHITE RUSSIAN": { name: "WHITE RUSSIAN", description: "(VODKA, COFFEE LIQUEUR, IRISH CREAM)" },
        "BLACK RUSSIAN": { name: "BLACK RUSSIAN", description: "(VODKA, COFFEE LIQUEUR)" },
        "CAIPIROSHKA MIX": { name: "CAIPIROSHKA MIX", description: "(VODKA, FRESH LIME, FRUITS: STRAWBERRY, BLACKBERRY, ORANGE, PASSION FRUIT)" },
        "GINA": { name: "GINA", description: "(VODKA, PASSION FRUIT, FRESH LIME, RED WINE)" },
        "BESO DE ARAÑA": { name: "SPIDER'S KISS", description: "(VODKA, MELON LIQUEUR, FRESH LIME)" },
        "VODKA TONIC": { name: "VODKA TONIC", description: "(VODKA, TONIC WATER)" },
        "MOJITO": { name: "MOJITO", description: "(WHITE RUM, FRESH LIME, SUGAR, MINT)" },
        "DAIQUIRI": { name: "DAIQUIRI", description: "(RUM, FRESH LIME, SUGAR, FRUITS: STRAWBERRY, BLACKBERRY, ORANGE, PASSION FRUIT)" },
        "EL PADRINO": { name: "THE GODFATHER", description: "(RED LABEL, AMARETTO LIQUEUR)" },
        "LUCIFER": { name: "LUCIFER", description: "(RED LABEL, AMARETTO LIQUEUR, ORANGE JUICE)" },
        "OLD FASHIONED": { name: "OLD FASHIONED", description: "(RED LABEL, ANGOSTURA BITTERS, SUGAR, ORANGE)" },
        "WHISKY SOUR NEW YORK": { name: "WHISKY SOUR NEW YORK", description: "(RED LABEL, FRESH LIME, SUGAR, EGG WHITE)" },
        "RED GIN": { name: "RED GIN", description: "(GIN, BLACKBERRY, MINT, GINGER ALE)" },
        "NEGRONI": { name: "NEGRONI", description: "(GIN, CAMPARI, VERMOUTH ROSSO)" },

        // SPECIALS
        "ZHUMIRINHA": { name: "ZHUMIRINHA", description: "(ZHUMIR, FRESH LIME, SUGAR)" },
        "MAI-TAI": { name: "MAI-TAI", description: "(WHITE RUM, DARK RUM, ORANGE JUICE, PINEAPPLE, AMARETTO LIQUEUR, GRENADINE)" },
        "LONG ISLAND": { name: "LONG ISLAND", description: "(VODKA, GIN, TRIPLE SEC, TEQUILA, WHITE RUM, COCA-COLA)" },
        "K-12": { name: "K-12", description: "(GIN, TEQUILA, TRIPLE SEC, ENERGY DRINK, SPRITE)" },
        "JAGGER BOMB DE LA CASA": { name: "HOUSE JAGGER BOMB", description: "(HERBAL LIQUEUR, ENERGY DRINK)" },

        // HOT DRINKS
        "CANELAZO": { name: "CANELAZO", description: "(AGUARDIENTE, NARANJILLA, CINNAMON)" },

        // SPIRITS
        "MERLOT": { name: "MERLOT", description: "" },
        "CABERNET SAUVIGNON": { name: "CABERNET SAUVIGNON", description: "" },
        "VINO BLANCO": { name: "WHITE WINE", description: "" },
        "TANQUERAY": { name: "TANQUERAY", description: "" },
        "BEFEATER": { name: "BEEFEATER", description: "" },
        "BOMBAY": { name: "BOMBAY", description: "" },
        "JOHNNY WALKER RED LABEL": { name: "JOHNNY WALKER RED LABEL", description: "" },
        "JOHNNY WALKER DOUBLE BLACK": { name: "JOHNNY WALKER DOUBLE BLACK", description: "" },
        "JACK DANIELS": { name: "JACK DANIELS", description: "(TENNESSEE-HONEY-FIRE)" },
        "BUCHANANS": { name: "BUCHANAN'S", description: "" },
        "CARÚPANO 18 AÑOS": { name: "CARÚPANO 18 YEARS", description: "" },
        "DIPLOMÁTICO RESERVA EXCLUSIVA": { name: "DIPLOMÁTICO EXCLUSIVE RESERVE", description: "" },
        "ABUELO 7 AÑOS": { name: "ABUELO 7 YEARS", description: "" },
        "ZACAPA 12 AÑOS": { name: "ZACAPA 12 YEARS", description: "" },
        "RON DE LA CASA": { name: "HOUSE RUM", description: "" },
        "ANTIOQUEÑO": { name: "ANTIOQUEÑO", description: "" },
        "CACHACA": { name: "CACHAÇA", description: "" },
        "PISCO  ": { name: "PISCO", description: "" }
    },
    ru: {
        // ПЛАМЕННЫЕ КОКТЕЙЛИ
        "FERRARI": { name: "ФЕРРАРИ", description: "РОМ, ТРИПЛ СЕК, БЛЮ КЮРАСАО, ГРЕНАДИН" },
        "LAMBORGHINI": { name: "ЛАМБОРГИНИ", description: "ВОДКА, КОФЕЙНЫЙ ЛИКЕР, АЙРИШ КРИМ, БЛЮ КЮРАСАО" },
        "CASCO DE INGENIERO CIVIL": { name: "КАСКА ИНЖЕНЕРА", description: "ТЕКИЛА, БЛЮ КЮРАСАО, АЙРИШ КРИМ, ВОДКА И ТРИПЛ СЕК" },
        "LÁGRIMA DE CULEBRA": { name: "СЛЕЗА ЗМЕИ", description: "ТЕКИЛА, СВЕЖИЙ ЛАЙМ И КОФЕЙНЫЙ ЛИКЕР" },
        "CHERNOBYL": { name: "ЧЕРНОБЫЛЬ", description: "ВОДКА, ТЕКИЛА, РОМ, ВИСКИ, СПРАЙТ, КОКА-КОЛА И ГРЕНАДИН" },
        "LUCES NAVIDEÑAS": { name: "РОЖДЕСТВЕНСКИЕ ОГНИ", description: "РОМ, ВОДКА, БЛЮ КЮРАСАО, КРАСНОЕ ВИНО, АЙРИШ КРИМ, ТРИПЛ СЕК, МЯТНЫЙ ЛИКЕР, АМАРЕТТО И ГРЕНАДИН" },
        "ABIAMO": { name: "АБИАМО", description: "ВОДКА, РОМ, ДЖИН, ТРИПЛ СЕК (МЕТОД: ЧЕРЕЗ ВОРОНКУ)" },
        "LADA-14": { name: "ЛАДА-14", description: "ТРАВЯНОЙ ЛИКЕР, ДЖИН, ВОДКА И СВЕЖИЙ ЛАЙМ" },
        "INMORTAL CON FATALITY": { name: "БЕССМЕРТНЫЙ С ФАТАЛЬНОСТЬЮ", description: "РОМ, ТРИПЛ СЕК, ГРЕНАДИН, БЛЮ КЮРАСАО, АЙРИШ КРИМ, МЯТНЫЙ ЛИКЕР, ПИВО, ВОДКА, ТЕКИЛА" },
        "SUPER FERRARI": { name: "СУПЕР ФЕРРАРИ", description: "АБСЕНТ, БЛЮ КЮРАСАО, ГРЕНАДИН, РОМ И ТРИПЛ СЕК" },
        "LAMBORGINI KALINA": { name: "ЛАМБОРГИНИ КАЛИНА", description: "РОМ, БЛЮ КЮРАСАО, ТЕКИЛА, ДЖИН И ГРЕНАДИН, МЕТОД: ПЫЛАЮЩИЕ БАШНИ ИЗ БОКАЛОВ" },

        // ПЛАМЕННЫЕ ШОТЫ
        "TNT": { name: "ТНТ", description: "ДЖИН, ТЕКИЛА, ВОДКА, РОМ" },
        "BUDA": { name: "БУДДА", description: "ВОДКА, ТЕКИЛА, РОМ, ДЖИН, ТРИПЛ СЕК И ГРЕНАДИН" },
        "B-52": { name: "Б-52", description: "ВОДКА, КОФЕЙНЫЙ ЛИКЕР, АЙРИШ КРИМ" },
        "MEXICAN FLAG SHOT": { name: "ШОТ МЕКСИКАНСКИЙ ФЛАГ", description: "ТЕКИЛА, МЯТНЫЙ ЛИКЕР И ГРЕНАДИН" },
        "SIN NOMBRE": { name: "БЕЗ ИМЕНИ", description: "ВОДКА, БЛЮ КЮРАСАО, АЙРИШ КРИМ И ГРЕНАДИН" },
        "BESO NEGRO": { name: "ЧЕРНЫЙ ПОЦЕЛУЙ", description: "РОМ, АЙРИШ КРИМ И ГРЕНАДИН" },

        // ШОТЫ РУСО
        "SIBERIANO": { name: "СИБИРСКИЙ", description: "ВОДКА И МЯТНЫЙ ЛИКЕР" },
        "GATO VASILIY": { name: "КОТ ВАСИЛИЙ", description: "ДЖИН, СВЕЖИЙ ЛАЙМ И ГРЕНАДИН" },
        "LÍNEA DE BIKINI": { name: "ЛИНИЯ БИКИНИ", description: "ВОДКА, КОФЕЙНЫЙ ЛИКЕР И КЛУБНИКА" },
        "VIENTO DE MENTA": { name: "МЯТНЫЙ ВЕТЕР", description: "ТЕКИЛА, МЯТНЫЙ ЛИКЕР И БЛЮ КЮРАСАО" },
        "BOLLARSKIY": { name: "БОЛЛАРСКИЙ", description: "ВОДКА, ТАБАСКО И ГРЕНАДИН" },
        "TEQUILA AZUL": { name: "СИНЯЯ ТЕКИЛА", description: "ТЕКИЛА И БЛЮ КЮРАСАО" },
        "MEDUSA": { name: "МЕДУЗА", description: "РОМ, ТРИПЛ СЕК, АЙРИШ КРИМ И БЛЮ КЮРАСАО" },
        "BANDERA ECUATORIANA": { name: "ЭКВАДОРСКИЙ ФЛАГ", description: "ВОДКА, БЛЮ КЮРАСАО, ЛИКЕР МАРАКУЙИ И ГРЕНАДИН" },
        "BANDERA RUSA": { name: "РУССКИЙ ФЛАГ", description: "ВОДКА, БЛЮ КЮРАСАО И ГРЕНАДИН" },
        "SEMÁFORO (3 SHOTS)": { name: "СВЕТОФОР (3 ШОТА)", description: "ВОДКА, МЯТНЫЙ ЛИКЕР, ЛИКЕР МАРАКУЙИ И ГРЕНАДИН" },
        "QUÍMICO": { name: "ХИМИК", description: "10 ПРОБИРОК, РЕЦЕПТ ЗАВЕДЕНИЯ" },

        // КОКТЕЙЛИ С ПИВОМ
        "MICHELADA CLÁSICA": { name: "КЛАССИЧЕСКАЯ МИЧЕЛАДА", description: "ПИВО КЛУБ, СВЕЖИЙ ЛАЙМ, СОЛЬ, ПЕРЕЦ, ВУСТЕРШИРСКИЙ СОУС И ТАБАСКО" },
        "MICHELADA MIX": { name: "МИЧЕЛАДА МИКС", description: "ПИВО КЛУБ, СВЕЖИЙ ЛАЙМ, СОЛЬ, ПЕРЕЦ, ВУСТЕРШИРСКИЙ СОУС И ТАБАСКО, ФРУКТЫ: КЛУБНИКА, ЕЖЕВИКА, АПЕЛЬСИН, МАРАКУЙЯ" },
        "MICHELADA CON TEQUILA": { name: "МИЧЕЛАДА С ТЕКИЛОЙ", description: "ТЕКИЛА, ПИВО КЛУБ, СВЕЖИЙ ЛАЙМ, СОЛЬ, ПЕРЕЦ, ВУСТЕРШИРСКИЙ СОУС И ТАБАСКО" },
        "BOMBA": { name: "БОМБА", description: "ПИВО КЛУБ, БЛЮ КЮРАСАО, ТРИПЛ СЕК И ГРЕНАДИН" },
        "FUEGO": { name: "ОГОНЬ", description: "ПИВО КЛУБ, АМАРЕТТО И РОМ" },
        "SUBMARINO RUSO": { name: "РУССКАЯ ПОДВОДНАЯ ЛОДКА", description: "ПИВО КЛУБ И ВОДКА" },
        "SUBMARINO MEXICANO": { name: "МЕКСИКАНСКАЯ ПОДВОДНАЯ ЛОДКА", description: "ПИВО КЛУБ И ТЕКИЛА" },
        "CERVEZA AZUL": { name: "СИНЕЕ ПИВО", description: "ПИВО КЛУБ, ТРИПЛ СЕК, ТЕКИЛА И БЛЮ КЮРАСАО" },
        "TURBO BIELA RUSA": { name: "ТУРБО БИЕЛА РУССКАЯ", description: "ПИВО КЛУБ, ВОДКА, ТРИПЛ СЕК, ДЖИН, РОМ, ТЕКИЛА" },
        "NEGRO CAZADOR": { name: "ЧЕРНЫЙ ОХОТНИК", description: "ТРАВЯНОЙ ЛИКЕР И ТЕМНОЕ ПИВО" },
        "MICHELADA MEXICANA ORIGINAL": { name: "ОРИГИНАЛЬНАЯ МЕКСИКАНСКАЯ МИЧЕЛАДА", description: "ПИВО КОРОНА, СВЕЖИЙ ЛАЙМ, ТАБАСКО И ТЕКИЛА" },

        // ПИВО
        "HEINEKEN (330ML)": { name: "ХАЙНЕКЕН (330МЛ)", description: "" },
        "CLUB (550ML)": { name: "КЛУБ (550МЛ)", description: "" },
        "CORONA EXTRA (355ML)": { name: "КОРОНА ЭКСТРА (355МЛ)", description: "" },
        "STELLA ARTOIS (330ML)": { name: "СТЕЛЛА АРТУА (330МЛ)", description: "" },

        // КРАФТОВОЕ ПИВО
        "DRY STOUT (500 ML)": { name: "ДРАЙ СТАУТ (500 МЛ)", description: "" },
        "RED IPA (500 ML)": { name: "КРАСНЫЙ ИПА (500 МЛ)", description: "" },
        "BELGIAN TRIPLE (500 ML)": { name: "БЕЛЬГИЙСКИЙ ТРИПЛЬ (500 МЛ)", description: "" },
        "CREAM ALE (500 ML)": { name: "КРЕМОВЫЙ ЭЛЬ (500 МЛ)", description: "" },

        // КУВШИНЫ
        "CUBA LIBRE": { name: "КУБА ЛИБРЕ", description: "" },
        "DESTORNILLADOR": { name: "ОТВЕРТКА", description: "" },
        "VINO HERVIDO": { name: "ГЛИНТВЕЙН", description: "" },
        "MOJITO CLÁSICO": { name: "КЛАССИЧЕСКИЙ МОХИТО", description: "" },
        "CAIPIROSHKA": { name: "КАЙПИРОШКА", description: "" },
        "GIN TONIC": { name: "ДЖИН ТОНИК", description: "" },
        "MOSCU MULE": { name: "МОСКОВСКИЙ МУЛ", description: "" },
        "SANGRÍA RUSA": { name: "РУССКАЯ САНГРИЯ", description: "" },
        "LONG ISLAND ICE TEA": { name: "ЛОНГ АЙЛЕНД АЙС ТИ", description: "" },
        "PADRINO": { name: "КРЕСТНЫЙ ОТЕЦ", description: "" },
        "MOJITO MIX": { name: "МОХИТО МИКС", description: "" },
        "HADA VERDE": { name: "ЗЕЛЕНАЯ ФЕЯ", description: "" },

        // БЕЗАЛКОГОЛЬНЫЕ КОКТЕЙЛИ
        "LIMONADA DE FRUTILLA": { name: "КЛУБНИЧНЫЙ ЛИМОНАД", description: "" },
        "BATMAN": { name: "БЭТМЕН", description: "" },
        "MOJITO DE NARANJA": { name: "АПЕЛЬСИНОВЫЙ МОХИТО", description: "" },
        "PATITAS DE GATO": { name: "КОШАЧЬИ ЛАПКИ", description: "" },
        "PIÑA COLADA": { name: "ПИНА КОЛАДА", description: "" },
        "PIÑA COLADA DE FRUTILLA": { name: "КЛУБНИЧНАЯ ПИНА КОЛАДА", description: "" },
        "JUGO DE NARANJA (NATURAL)": { name: "АПЕЛЬСИНОВЫЙ СОК (НАТУРАЛЬНЫЙ)", description: "" },
        "JUGO DE PIÑA (NATURAL)": { name: "АНАНАСОВЫЙ СОК (НАТУРАЛЬНЫЙ)", description: "" },
        "TASA TÉ": { name: "ЧАШКА ЧАЯ", description: "" },
        "CAFÉ AMERICANO": { name: "АМЕРИКАНО", description: "" },

        // ВОДА И ГАЗИРОВКА
        "AGUA SIN GAS": { name: "ВОДА БЕЗ ГАЗА", description: "" },
        "AGUA CON GAS": { name: "ГАЗИРОВАННАЯ ВОДА", description: "" },
        "ENERGIZANTE": { name: "ЭНЕРГЕТИК", description: "" },
        "SPRITE": { name: "СПРАЙТ", description: "" },
        "COCA-COLA": { name: "КОКА-КОЛА", description: "" },

        // ЛОНГ ДРИНКИ
        "TEQUILA SUNRISE": { name: "ТЕКИЛА САНРАЙЗ", description: "(ТЕКИЛА, АПЕЛЬСИНОВЫЙ СОК, ГРЕНАДИН)" },
        "MARGARITA CLÁSICA": { name: "КЛАССИЧЕСКАЯ МАРГАРИТА", description: "(ТЕКИЛА, СВЕЖИЙ ЛАЙМ, ТРИПЛ СЕК)" },
        "MARGARITA MIX": { name: "МАРГАРИТА МИКС", description: "(ТЕКИЛА, СВЕЖИЙ ЛАЙМ, ТРИПЛ СЕК, ФРУКТЫ: КЛУБНИКА, ЕЖЕВИКА, АПЕЛЬСИН, МАРАКУЙЯ)" },
        "WHITE RUSSIAN": { name: "БЕЛЫЙ РУССКИЙ", description: "(ВОДКА, КОФЕЙНЫЙ ЛИКЕР, АЙРИШ КРИМ)" },
        "BLACK RUSSIAN": { name: "ЧЕРНЫЙ РУССКИЙ", description: "(ВОДКА, КОФЕЙНЫЙ ЛИКЕР)" },
        "CAIPIROSHKA MIX": { name: "КАЙПИРОШКА МИКС", description: "(ВОДКА, СВЕЖИЙ ЛАЙМ, ФРУКТЫ: КЛУБНИКА, ЕЖЕВИКА, АПЕЛЬСИН, МАРАКУЙЯ)" },
        "GINA": { name: "ДЖИНА", description: "(ВОДКА, МАРАКУЙЯ, СВЕЖИЙ ЛАЙМ, КРАСНОЕ ВИНО)" },
        "BESO DE ARAÑA": { name: "ПОЦЕЛУЙ ПАУКА", description: "(ВОДКА, ДЫННЫЙ ЛИКЕР, СВЕЖИЙ ЛАЙМ)" },
        "VODKA TONIC": { name: "ВОДКА ТОНИК", description: "(ВОДКА, ТОНИК)" },
        "MOJITO": { name: "МОХИТО", description: "(БЕЛЫЙ РОМ, СВЕЖИЙ ЛАЙМ, САХАР, МЯТА)" },
        "DAIQUIRI": { name: "ДАЙКИРИ", description: "(РОМ, СВЕЖИЙ ЛАЙМ, САХАР, ФРУКТЫ: КЛУБНИКА, ЕЖЕВИКА, АПЕЛЬСИН, МАРАКУЙЯ)" },
        "EL PADRINO": { name: "КРЕСТНЫЙ ОТЕЦ", description: "(РЕД ЛЕЙБЛ, ЛИКЕР АМАРЕТТО)" },
        "LUCIFER": { name: "ЛЮЦИФЕР", description: "(РЕД ЛЕЙБЛ, ЛИКЕР АМАРЕТТО, АПЕЛЬСИНОВЫЙ СОК)" },
        "OLD FASHIONED": { name: "ОЛДФЭШНД", description: "(РЕД ЛЕЙБЛ, АНГОСТУРА БИТТЕР, САХАР, АПЕЛЬСИН)" },
        "WHISKY SOUR NEW YORK": { name: "ВИСКИ САУЭР НЬЮ-ЙОРК", description: "(РЕД ЛЕЙБЛ, СВЕЖИЙ ЛАЙМ, САХАР, ЯИЧНЫЙ БЕЛОК)" },
        "RED GIN": { name: "КРАСНЫЙ ДЖИН", description: "(ДЖИН, ЕЖЕВИКА, МЯТА, ИМБИРНЫЙ ЭЛЬ)" },
        "NEGRONI": { name: "НЕГРОНИ", description: "(ДЖИН, КАМПАРИ, ВЕРМУТ РОССО)" },

        // СПЕЦИАЛЬНЫЕ
        "ZHUMIRINHA": { name: "ЖУМИРИНЬЯ", description: "(ЖУМИР, СВЕЖИЙ ЛАЙМ, САХАР)" },
        "MAI-TAI": { name: "МАЙ-ТАЙ", description: "(БЕЛЫЙ РОМ, ТЕМНЫЙ РОМ, АПЕЛЬСИНОВЫЙ СОК, АНАНАС, ЛИКЕР АМАРЕТТО, ГРЕНАДИН)" },
        "LONG ISLAND": { name: "ЛОНГ АЙЛЕНД", description: "(ВОДКА, ДЖИН, ТРИПЛ СЕК, ТЕКИЛА, БЕЛЫЙ РОМ, КОКА-КОЛА)" },
        "K-12": { name: "К-12", description: "(ДЖИН, ТЕКИЛА, ТРИПЛ СЕК, ЭНЕРГЕТИК, СПРАЙТ)" },
        "JAGGER BOMB DE LA CASA": { name: "ЕГЕР БОМБ ЗАВЕДЕНИЯ", description: "(ТРАВЯНОЙ ЛИКЕР, ЭНЕРГЕТИК)" },

        // ГОРЯЧИЕ НАПИТКИ
        "CANELAZO": { name: "КАНЕЛАЗО", description: "(АГУАРДИЕНТЕ, НАРАНХИЛЬЯ, КОРИЦА)" },

        // КРЕПКИЕ НАПИТКИ
        "MERLOT": { name: "МЕРЛО", description: "" },
        "CABERNET SAUVIGNON": { name: "КАБЕРНЕ СОВИНЬОН", description: "" },
        "VINO BLANCO": { name: "БЕЛОЕ ВИНО", description: "" },
        "TANQUERAY": { name: "ТАНКЕРЕЙ", description: "" },
        "BEFEATER": { name: "БИФИТЕР", description: "" },
        "BOMBAY": { name: "БОМБЕЙ", description: "" },
        "JOHNNY WALKER RED LABEL": { name: "ДЖОННИ УОКЕР РЕД ЛЕЙБЛ", description: "" },
        "JOHNNY WALKER DOUBLE BLACK": { name: "ДЖОННИ УОКЕР ДАБЛ БЛЭК", description: "" },
        "JACK DANIELS": { name: "ДЖЕК ДЭНИЭЛС", description: "(ТЕННЕССИ-ХАНИ-ФАЙР)" },
        "BUCHANANS": { name: "БЬЮКЕНЕНС", description: "" },
        "CARÚPANO 18 AÑOS": { name: "КАРУПАНО 18 ЛЕТ", description: "" },
        "DIPLOMÁTICO RESERVA EXCLUSIVA": { name: "ДИПЛОМАТИКО ЭКСКЛЮЗИВНЫЙ РЕЗЕРВ", description: "" },
        "ABUELO 7 AÑOS": { name: "АБУЭЛО 7 ЛЕТ", description: "" },
        "ZACAPA 12 AÑOS": { name: "САКАПА 12 ЛЕТ", description: "" },
        "RON DE LA CASA": { name: "РОМ ЗАВЕДЕНИЯ", description: "" },
        "ANTIOQUEÑO": { name: "АНТЬОКЕНЬО", description: "" },
        "CACHACA": { name: "КАШАСА", description: "" },
        "PISCO  ": { name: "ПИСКО", description: "" }
    }
} as const

// Traducciones generales (hero, footer, etc.)
const generalTranslations = {
    es: {
        'hero.title': 'Explora nuestra carta',
        'hero.subtitle': 'Desde cócteles clásicos hasta nuestras creaciones más audaces, cada opción está pensada para sorprender y deleitar tu paladar.',
        'hero.downloadButton': 'Descargar Menú',
        'footer.pages': 'Páginas',
        'footer.navigation.home': 'Inicio',
        'footer.navigation.about': 'Sobre Nosotros',
        'footer.navigation.menu': 'Menú',
        'footer.navigation.contact': 'Contacto',
        'footer.navigation.gallery': 'Galería',
        'footer.hours': 'Horarios de Apertura',
        'footer.openNow': 'ABIERTO AHORA',
        'footer.closedNow': 'CERRADO AHORA',
        'footer.currentTime': 'Hora actual:',
        'footer.monday': 'Lunes',
        'footer.tuesday': 'Martes',
        'footer.wednesday': 'Miércoles',
        'footer.thursday': 'Jueves',
        'footer.friday': 'Viernes',
        'footer.saturday': 'Sábado',
        'footer.sunday': 'Domingo',
        'footer.closed': 'CERRADO',
        'footer.description': 'La experiencia nocturna más exclusiva de Cuenca. Donde la tradición se encuentra con la innovación.',
        'footer.rights': 'Todos los derechos reservados.',
        'whatsapp.reservationMessage': 'Hola, me gustaría hacer una reserva en Bar Ruso Kalashnikov'
    },
    en: {
        'hero.title': 'Explore Our Menu',
        'hero.subtitle': 'From classic cocktails to our most daring creations, each option is designed to surprise and delight your palate.',
        'hero.downloadButton': 'Download Menu',
        'footer.pages': 'Pages',
        'footer.navigation.home': 'Home',
        'footer.navigation.about': 'About Us',
        'footer.navigation.menu': 'Menu',
        'footer.navigation.contact': 'Contact',
        'footer.navigation.gallery': 'Gallery',
        'footer.hours': 'Opening Hours',
        'footer.openNow': 'OPEN NOW',
        'footer.closedNow': 'CLOSED NOW',
        'footer.currentTime': 'Current time:',
        'footer.monday': 'Monday',
        'footer.tuesday': 'Tuesday',
        'footer.wednesday': 'Wednesday',
        'footer.thursday': 'Thursday',
        'footer.friday': 'Friday',
        'footer.saturday': 'Saturday',
        'footer.sunday': 'Sunday',
        'footer.closed': 'CLOSED',
        'footer.description': 'Cuenca\'s most exclusive nightlife experience. Where tradition meets innovation.',
        'footer.rights': 'All rights reserved.',
        'whatsapp.reservationMessage': 'Hello, I would like to make a reservation at Bar Ruso Kalashnikov'
    },
    ru: {
        'hero.title': 'Изучите наше меню',
        'hero.subtitle': 'От классических коктейлей до наших самых смелых творений, каждый вариант призван удивить и порадовать ваш вкус.',
        'hero.downloadButton': 'Скачать меню',
        'footer.pages': 'Страницы',
        'footer.navigation.home': 'Главная',
        'footer.navigation.about': 'О нас',
        'footer.navigation.menu': 'Меню',
        'footer.navigation.contact': 'Контакты',
        'footer.navigation.gallery': 'Галерея',
        'footer.hours': 'Часы работы',
        'footer.openNow': 'СЕЙЧАС ОТКРЫТО',
        'footer.closedNow': 'СЕЙЧАС ЗАКРЫТО',
        'footer.currentTime': 'Текущее время:',
        'footer.monday': 'Понедельник',
        'footer.tuesday': 'Вторник',
        'footer.wednesday': 'Среда',
        'footer.thursday': 'Четверг',
        'footer.friday': 'Пятница',
        'footer.saturday': 'Суббота',
        'footer.sunday': 'Воскресенье',
        'footer.closed': 'ЗАКРЫТО',
        'footer.description': 'Самый эксклюзивный ночной отдых в Куэнке. Где традиции встречаются с инновациями.',
        'footer.rights': 'Все права защищены.',
        'whatsapp.reservationMessage': 'Привет, я хотел бы забронировать столик в Bar Ruso Kalashnikov'
    }
} as const

// Hook personalizado para las traducciones del menú
export function useMenuLanguage() {
    const { currentLanguage } = useLanguage()

    const tMenu = (key: MenuTranslationKeys): string => {
        return generalTranslations[currentLanguage][key] || key
    }

    // Función para traducir items individuales del menú
    const translateMenuItem = (itemName: string): { name: string; description: string } => {
        const translation = menuItemTranslations[currentLanguage][itemName as keyof typeof menuItemTranslations[typeof currentLanguage]]

        if (translation) {
            return {
                name: translation.name,
                description: translation.description
            }
        }

        // Si no hay traducción, devolver el original
        return {
            name: itemName,
            description: "" // Se mantendrá la descripción original del array
        }
    }

    return {
        currentLanguage,
        tMenu,
        translateMenuItem
    }
}

// Función para obtener títulos de secciones traducidos
export const getTranslatedMenuSections = (currentLanguage: 'es' | 'en' | 'ru'): Record<MenuSectionId, string> => {
    return sectionTitles[currentLanguage]
}

// Función para obtener menú completamente traducido
export const getTranslatedMenuData = (currentLanguage: 'es' | 'en' | 'ru', originalMenuSections: MenuSection[]): MenuSection[] => {
    const translatedTitles = sectionTitles[currentLanguage]
    const itemTranslations = menuItemTranslations[currentLanguage]

    return originalMenuSections.map(section => ({
        ...section,
        title: translatedTitles[section.id] || section.title,
        items: section.items.map(item => {
            const translation = itemTranslations[item.name as keyof typeof itemTranslations]

            if (translation) {
                return {
                    name: translation.name,
                    description: translation.description || item.description,
                    price: item.price // Los precios se mantienen iguales
                }
            }

            return item // Si no hay traducción, mantener original
        })
    }))
}