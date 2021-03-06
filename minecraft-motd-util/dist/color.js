"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtil = /** @class */ (function() {
    function ColorUtil(list) {
        this.list = [];
        for (var key in list) {
            this.list.push({
                name: key,
                hex: list[key],
                sum: sum(list[key])
            });
        }
    }
    ColorUtil.prototype.closest = function(input) {
        var colorSum = sum(input);
        var closest = null;
        var lastDifference = Infinity;
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var color = _a[_i];
            var diff = Math.abs(colorSum - color.sum);
            if (closest === null || diff < lastDifference) {
                closest = color;
                lastDifference = diff;
            }
        }
        return closest;
    };
    return ColorUtil;
}());
var sum = function(input) {
    var sum = 0;
    input = input.replace('#', '');
    var r = input.substring(0, 2);
    var g = input.substring(2, 4);
    var b = input.substring(4, 6);
    sum = Math.sqrt(Math.pow(parseInt(r, 16), 2) + Math.pow(parseInt(g, 16), 2) + Math.pow(parseInt(b, 16), 2));
    return sum;
};
exports.default = ColorUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQTtJQUdJLG1CQUFZLElBQTRCO1FBRmhDLFNBQUksR0FBb0IsRUFBRSxDQUFDO1FBRy9CLEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNYLElBQUksRUFBRSxHQUFHO2dCQUNULEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNkLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVELDJCQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ2pCLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLE9BQU8sR0FBeUIsSUFBSSxDQUFDO1FBQ3pDLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUU5QixLQUFvQixVQUFTLEVBQVQsS0FBQSxJQUFJLENBQUMsSUFBSSxFQUFULGNBQVMsRUFBVCxJQUFTLEVBQUU7WUFBMUIsSUFBTSxLQUFLLFNBQUE7WUFDWixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFNUMsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxjQUFjLEVBQUU7Z0JBQzNDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBRWhCLGNBQWMsR0FBRyxJQUFJLENBQUM7YUFDekI7U0FDSjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUFFRCxJQUFNLEdBQUcsR0FBRyxVQUFDLEtBQWE7SUFDdEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRVosS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRS9CLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRWhDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQUEsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBSSxDQUFDLENBQUEsR0FBRyxTQUFBLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUksQ0FBQyxDQUFBLEdBQUcsU0FBQSxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFJLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFcEYsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUM7QUFFRixrQkFBZSxTQUFTLENBQUMifQ==