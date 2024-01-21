import Achievement from "./Achievement"
import excercisesHistoryListData from "@data/excercisesHistoryListData"

const AchievementContainer = () => {

    const sumSquats = () => {
        let sum = 0;
        excercisesHistoryListData.forEach((item) => {
            if (item.name === 'Squats') {
                item.series.forEach((seria) => {
                    sum += seria.reps;
                });
            }
        });
        return sum;
    };

    const sumPushups = () => {
        let sum = 0;
        excercisesHistoryListData.forEach((item) => {
            if (item.name === 'Push-ups') {
                item.series.forEach((seria) => {
                    sum += seria.reps;
                });
            }
        });
        return sum;
    };

    const sumPullupsonabar = () => {
        let sum = 0;
        excercisesHistoryListData.forEach((item) => {
            if (item.name === 'Pull-ups on a bar') {
                item.series.forEach((seria) => {
                    sum += seria.reps;
                });
            }
        });
        return sum;
    };

    const maxBenchpress = () => {
        let max = 0;
        excercisesHistoryListData.forEach((item) => {
            if (item.name === 'Bench press') {
                item.series.forEach((seria) => {
                    if (seria.weight > max) {
                        max = seria.weight
                    }
                });
            }
        });
        return max;
    };

    const sumDays = () => {
        const uniqueDatesSet = new Set(excercisesHistoryListData.map(item => item.date));
        return uniqueDatesSet.size;
    };

    let progress = 0;
    const sumPushupsVal = sumPushups();
    const widthsPushups = sumPushupsVal >= 1000 ? 228 : parseInt(228 * (sumPushupsVal / 1000));
    const sumSquatsVal = sumSquats();
    const widthSquats = sumSquatsVal >= 1000 ? 228 : parseInt(228 * (sumSquatsVal / 1000));
    const sumPullupsonabarVal = sumPullupsonabar();
    const widthPullupsonabar = sumPullupsonabarVal >= 100 ? 228 : parseInt(228 * (sumPullupsonabarVal / 100));
    const maxBenchpressVal = maxBenchpress();
    const widthBenchpress = maxBenchpressVal >= 100 ? 228 : parseInt(228 * (maxBenchpressVal / 100));
    const sumDaysVal = sumDays();
    const widthDays = sumDaysVal >= 100 ? 228 : parseInt(228 * (sumDaysVal / 100));

    if (widthsPushups === 228) {
        progress += 1;
    }

    if (widthSquats === 228) {
        progress += 1;
    }

    if (widthPullupsonabar === 228) {
        progress += 1;
    }

    if (widthBenchpress === 228) {
        progress += 1;
    }

    if (widthDays === 228) {
        progress += 1;
    }

    const props = {
        sumSquats: sumSquatsVal,
        widthSquats: widthSquats,
        sumPushups: sumPushupsVal,
        widthsPushups: widthsPushups,
        sumPullupsonabar: sumPullupsonabarVal,
        widthPullupsonabar: widthPullupsonabar,
        maxBenchpress: maxBenchpressVal,
        widthBenchpress: widthBenchpress,
        sumDays: sumDaysVal,
        widthDays: widthDays,
        progress: progress,
    }

    return <Achievement {...props} />
}

export default AchievementContainer