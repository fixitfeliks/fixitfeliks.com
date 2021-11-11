export default class Store {
    static coors = [];

    static getCoors() {
        return this.coors;
    }

    static addCoor(coor) {
        this.coors.push(coor);
    }

    static clearAll() {
        this.coors = [];
    }
}
