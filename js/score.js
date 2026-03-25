export function score(rank, percent, minPercent) {
    // Cap at 50 ranks
    if (rank > 50) {
        return 0;
    }

    // curve (fits exactly rank 1 to 50)
    let baseScore = 1 + 99 * Math.pow(1 - (rank - 1) / 49, 2.1);

    let score = baseScore *
        ((percent - (minPercent - 1)) / (100 - (minPercent - 1)));

    score = Math.max(0, score);

    if (percent != 100) {
        return round(score - score / 3);
    }

    return Math.max(round(score), 0);
}
