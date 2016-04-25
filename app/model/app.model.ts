export class AppModel {
    static appModel: AppModel =  new AppModel();
    
    public static getAppModel() {
        return this.appModel;
    }
    
    public static completeSet() {
        this.appModel.setsCompleted--;
    }
    
    totalSets: number;
    setsCompleted: number;
}