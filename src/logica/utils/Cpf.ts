//3:11
export default class Cpf {
    private static _padrao = '???.???.???-??'

    static formatar(valor: string): string {
        
        const nums = Cpf.desformatar(valor).split('')
        return nums.reduce((formatado: string, num: string) => {
            return formatado.replace('?', num)
        }, Cpf._padrao).split('?')[0].replace(/[-.]$/, '')
    }

    // 123.456.789-00 -> 12345678900
    
    static desformatar(valor: string): string {
        return valor.replace(/[^0-9]+/g, '')
    }
}