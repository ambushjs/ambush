module.exports = function fileExt(fileName, opts = {}) {
    const ext = ((/[^./\\]*$/).exec(fileName) || [''])[0];
    return opts.preserveCase ? ext : ext.toLowerCase();
};
