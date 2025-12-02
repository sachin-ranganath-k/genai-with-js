import { PromptTemplate } from "@langchain/core/prompts"

const promptTemp = new PromptTemplate({
    inputVariables: ['progLanguage', 'wordLimit'],
    template: "Explain the use of {progLanguage} in {wordLimit} words"
})

const formattedPromptTemp = await promptTemp.format({
    progLanguage: 'react',
    wordLimit: 10
})

console.log(formattedPromptTemp);