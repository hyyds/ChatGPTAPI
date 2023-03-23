/**
 * @ Author: hc
 * @ Create Time: 2023/3/23 10:30
 * @ Modified by: hc
 * @ Modified time: 2023/3/23 10:30
 * @ Description:
 */
module.exports = async function  () {
    const { ChatGPTAPIBrowser } = await import("../chatgpt/build/index.js");
    return ChatGPTAPIBrowser
}

