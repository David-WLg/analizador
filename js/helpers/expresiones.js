

export const expresionesC = [
    {
        nombre: 'Cadena',
        expresion: /"[^"]*"/g,
        isTermino: false
    },
    {
        nombre: 'Operador de flujo',
        expresion: /(<<|>>)/g,
        isTermino: false
    },
    {
        nombre: 'Operador de incremento',
        expresion: /\+\+/g,
        isTermino: false
    },
    {
        nombre: 'Operador de decremento',
        expresion: /--/g,
        isTermino: false
    },
    {
        nombre: 'Operador relacional',
        expresion: />=|<=|>|<|==|!=/g,
        isTermino: false
    },
    {
        nombre: 'Operador de asignacion',
        expresion: /\+=|-=|\*=|\/=|=/g,
        isTermino: false
    },
    {
        nombre: 'Operador aritmetico',
        expresion: /\+|-|\/|\*|%/g,
        isTermino: false
    },
    {
        nombre: 'Operador logico',
        expresion: /!|&&|\|\|/g,
        isTermino: false
    },
    {
        nombre: 'Simbolo de agrupacion',
        expresion: /\(|\)|\[|\]/g,
        isTermino: false
    },
    {
        nombre: 'Simbolo de inicio',
        expresion: /{/g,
        isTermino: false
    },
    {
        nombre: 'Simbolo de cierre',
        expresion: /}/g,
        isTermino: false
    },
    {
        nombre: 'Simbolo fin de linea',
        expresion: /;/g,
        isTermino: false
    },
    {
        nombre: 'Simbolo de separacion',
        expresion: /,|\./g,
        isTermino: false
    },
    {
        nombre: 'Palabra reservada',
        expresion: /^(while|cout|cin|if|else|switch|case|for|int|char|string|float|bool|double|break|continue|struct|do|void|true|false|endl|return|const)$/,
        isTermino: true
    },
    {
        nombre: 'Identificador',
        expresion: /^[a-zA-Z_]+([a-zA-Z_]|[0-9])*$/,
        isTermino: true
    },
    {
        nombre: 'Constante',
        expresion: /^[0-9]+$/,
        isTermino: true
    }
]

export const expresionesJS = [
    {
        nombre: 'Cadena',
        expresion: /"[^"]*"|'[^']*'/g,
        isTermino: false
    },
    {
        nombre: 'Operador de incremento',
        expresion: /\+\+/g,
        isTermino: false
    },
    {
        nombre: 'Operador de decremento',
        expresion: /--/g,
        isTermino: false
    },
    {
        nombre: 'Operador relacional',
        expresion: />=|<=|>|<|===|!==|==|!=/g,
        isTermino: false
    },
    {
        nombre: 'Operador de asignacion',
        expresion: /\+=|-=|\*=|\/=|=/g,
        isTermino: false
    },
    {
        nombre: 'Operador aritmetico',
        expresion: /\+|-|\/|\*|%/g,
        isTermino: false
    },
    {
        nombre: 'Operador logico',
        expresion: /!|&&|\|\|/g,
        isTermino: false
    },
    {
        nombre: 'Simbolo de agrupacion',
        expresion: /\(|\)|\[|\]/g,
        isTermino: false
    },
    {
        nombre: 'Simbolo de inicio',
        expresion: /{/g,
        isTermino: false
    },
    {
        nombre: 'Simbolo de cierre',
        expresion: /}/g,
        isTermino: false
    },
    {
        nombre: 'Simbolo fin de linea',
        expresion: /;/g,
        isTermino: false
    },
    {
        nombre: 'Simbolo de separacion',
        expresion: /,|\./g,
        isTermino: false
    },
    {
        nombre: 'Palabra reservada',
        expresion: /^(while|if|else|switch|case|for|break|continue|do|true|false|return|of|in|let|var|const|try|catch|import|from|export|default|async|await|function)$/,
        isTermino: true
    },
    {
        nombre: 'Identificador',
        expresion: /^[a-zA-Z_]+([a-zA-Z_]|[0-9])*$/,
        isTermino: true
    },
    {
        nombre: 'Constante',
        expresion: /^[0-9]+$/,
        isTermino: true
    }
]



