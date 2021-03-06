import * as React from "react";
import {RangeBase, IPropsDoubleRangeController} from "../../common/Range/RangeBase";
import {RangeHovered} from "../../common/Range/_hovered/Range_hovered";
import {compose} from "@bem-react/core";

const BemDoubleRange = compose(RangeHovered)(RangeBase);

export default class DoubleRangeController extends React.Component<{}, IPropsDoubleRangeController > {
    constructor(props: any) {
        super(props);
        this.state = {
            min: 10,
            max: 100,
            leftVal: 15,
            rightVal: 60,
        };
    }
    public onChange = (field: Partial<keyof IPropsDoubleRangeController>, value: string | number ) => {
        const data: any = {};
        data[field] = value;
        this.setState(data);
    }

    public render() {
        const { leftVal, rightVal, min, max } = this.state;
        return <BemDoubleRange id="range"
                          leftVal={leftVal}
                          rightVal={rightVal}
                          min={min}
                          max={max}
                          baseColor="#d8d8d8"
                          lightColor="#eb6745"
                          text="Рендж"
                          hovered={false}
                          focused={true}
                           onChange={this.onChange}/>;
    }
}
