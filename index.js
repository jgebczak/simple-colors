const COLOR_DEFAULT = '\x1B[39m'

const COLOR_RED   = '\x1B[31m',
      COLOR_GREEN = '\x1B[32m',
      COLOR_WHITE = '\x1B[37m',
      COLOR_GREY  = '\x1B[90m',
      COLOR_BLACK = '\x1B[30m',
      COLOR_YELLOW = '\x1B[33m',
      COLOR_BLUE = '\x1B[34m',
      COLOR_MAGENTA = '\x1B[35m',
      COLOR_CYAN = '\x1B[36m',

      STYLE_BOLD  = '\x1B[1m',
      STYLE_ITALIC = '\x1B[3m',
      STYLE_UNDERLINE = '\x1B[4m',
      STYLE_INVERSE = '\x1B[7m',
      STYLE_STRIKETHROUGH = '\x1B[9m'


String.prototype.red = function()
{
    return COLOR_RED + this + COLOR_DEFAULT;
}

String.prototype.black = function()
{
    return COLOR_BLACK + this + COLOR_DEFAULT;
}

String.prototype.green = function()
{
    return COLOR_GREEN + this + COLOR_DEFAULT;
}

String.prototype.white = function()
{
    return COLOR_WHITE + this + COLOR_DEFAULT;
}

String.prototype.grey = function()
{
    return COLOR_GREY + this + COLOR_DEFAULT;
}

String.prototype.bold = function()
{
    return STYLE_BOLD + this + '\x1B[22m';
}

String.prototype.italic = function()
{
    return STYLE_ITALIC + this + '\x1B[23m';
}

String.prototype.underline = function()
{
    return STYLE_UNDERLINE + this + '\x1B[24m';
}

String.prototype.inverse = function()
{
    return STYLE_INVERSE + this + '\x1B[27m';
}

String.prototype.strikethrough = function()
{
    return STYLE_STRIKETHROUGH + this + '\x1B[29m';
}

String.prototype.yellow = function()
{
    return COLOR_YELLOW + this + COLOR_DEFAULT;
}

String.prototype.blue = function()
{
    return COLOR_BLUE + this + COLOR_DEFAULT;
}

String.prototype.cyan = function()
{
    return COLOR_CYAN + this + COLOR_DEFAULT;
}

String.prototype.magenta = function()
{
    return COLOR_MAGENTA + this + COLOR_DEFAULT;
}
