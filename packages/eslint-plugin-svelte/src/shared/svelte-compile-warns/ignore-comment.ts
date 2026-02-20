// This utility function is for parsing Svelte ignore comments
// which should handle both comma-separated rules and parenthesized notes appropriately.

export function parseIgnoreComment(comment) {
    const rules = comment.split(',').map(rule => rule.trim());
    return rules.map(rule => {
        const noteStart = rule.indexOf('(');
        if (noteStart !== -1) {
            return {
                rule: rule.substring(0, noteStart).trim(),
                note: rule.substring(noteStart + 1, rule.indexOf(')', noteStart)).trim(),
                range: getRangeOffsets(rule) // assuming this function exists for managing offsets
            };
        }
        return {
            rule,
            note: null,
            range: getRangeOffsets(rule),
        };
    });
}

function getRangeOffsets(rule) {
    // Implementation for calculating range offsets for the rule
}