class locators{
    getTableData(rowIndex:number,columnIndex:number){

        return $(`table[id=\'table01\'] tbody tr:nth-child(${rowIndex}) td:nth-child(${columnIndex})`)
        //table[id='table01'] tbody tr:nth-child(1) td:nth-child(2)

    }

    getTextBoxIndex(index:number){
        return $(`(//input[@type=\'text\'])[${index}]`)
    }
}

export default new locators()