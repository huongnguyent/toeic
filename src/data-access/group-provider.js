import constants from "./../resources/strings";
import clientUtils from "./../utils/client-utils";

export default {
    search(param) {
        let parameters =
            (param.page ? '?page=' + param.page : '&page=' + - 1) +
            (param.size ? '&size=' + param.size : '&size=' + - 1) +
            // (param.createdDate ? '&createdDate=' + param.createdDate : '') +
            // (param.createdName ? '&createdName=' + param.createdName : '') +
            // '&hightlights=' + (param.hightlights == undefined ? -1 : param.hightlights ? param.hightlights : 0) +
            (param.group_name ? '&name=' + param.group_name : '')

        return new Promise((resolve, reject) => {
            clientUtils.requestApi("get", constants.api.group.search + parameters, {}).then(x => {
                resolve(x);
            }).catch(e => {
                reject(e);
            })
        })
    },
    create(object) {
        return new Promise((resolve, reject) => {
            clientUtils.requestApi("post", constants.api.group.create, object).then(x => {
                resolve(x);
            }).catch(e => {
                reject(e);
            })
        });
    },
}