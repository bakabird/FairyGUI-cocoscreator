import { Vec2, Rect, Component, Node, UITransform, UIOpacity } from "cc";
import { Controller } from "./Controller";
import { BlendMode } from "./display/BlendMode";
import { GButton } from "./GButton";
import { GComponent } from "./GComponent";
import { GearBase } from "./gears/GearBase";
import { GearLook } from "./gears/GearLook";
import { GearSize } from "./gears/GearSize";
import { GearXY } from "./gears/GearXY";
import { GGraph } from "./GGraph";
import { GGroup } from "./GGroup";
import { GImage } from "./GImage";
import { GLabel } from "./GLabel";
import { GList } from "./GList";
import { GLoader } from "./GLoader";
import { GLoader3D } from "./GLoader3D";
import { GTextField } from "./GTextField";
import { GTreeNode } from "./GTreeNode";
import { PackageItem } from "./PackageItem";
import { Relations } from "./Relations";
import { ByteBuffer } from "./utils/ByteBuffer";
export declare class GObject {
    data?: any;
    packageItem?: PackageItem;
    static draggingObject: GObject | null;
    protected _x: number;
    protected _y: number;
    protected _alpha: number;
    protected _visible: boolean;
    protected _touchable: boolean;
    protected _grayed?: boolean;
    protected _draggable?: boolean;
    protected _skewX: number;
    protected _skewY: number;
    protected _pivotAsAnchor?: boolean;
    protected _sortingOrder: number;
    protected _internalVisible: boolean;
    protected _handlingController?: boolean;
    protected _tooltips?: string;
    protected _blendMode: BlendMode;
    protected _pixelSnapping?: boolean;
    protected _dragTesting?: boolean;
    protected _dragStartPos?: Vec2;
    protected _relations: Relations;
    protected _group: GGroup | null;
    protected _gears: GearBase[];
    protected _node: Node;
    protected _dragBounds?: Rect;
    sourceWidth: number;
    sourceHeight: number;
    initWidth: number;
    initHeight: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    _parent: GComponent | null;
    _width: number;
    _height: number;
    _rawWidth: number;
    _rawHeight: number;
    _id: string;
    _name: string;
    _underConstruct: boolean;
    _gearLocked?: boolean;
    _sizePercentInGroup: number;
    _touchDisabled?: boolean;
    _partner: GObjectPartner;
    _treeNode?: GTreeNode;
    _uiTrans: UITransform;
    _uiOpacity: UIOpacity;
    private _hitTestPt?;
    constructor();
    get id(): string;
    get name(): string;
    set name(value: string);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    setPosition(xv: number, yv: number): void;
    get xMin(): number;
    set xMin(value: number);
    get yMin(): number;
    set yMin(value: number);
    get pixelSnapping(): boolean;
    set pixelSnapping(value: boolean);
    center(restraint?: boolean): void;
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    setSize(wv: number, hv: number, ignorePivot?: boolean): void;
    makeFullScreen(): void;
    ensureSizeCorrect(): void;
    get actualWidth(): number;
    get actualHeight(): number;
    get scaleX(): number;
    set scaleX(value: number);
    get scaleY(): number;
    set scaleY(value: number);
    setScale(sx: number, sy: number): void;
    get skewX(): number;
    get pivotX(): number;
    set pivotX(value: number);
    get pivotY(): number;
    set pivotY(value: number);
    setPivot(xv: number, yv: number, asAnchor?: boolean): void;
    get pivotAsAnchor(): boolean;
    get touchable(): boolean;
    set touchable(value: boolean);
    get grayed(): boolean;
    set grayed(value: boolean);
    get enabled(): boolean;
    set enabled(value: boolean);
    get rotation(): number;
    set rotation(value: number);
    get alpha(): number;
    set alpha(value: number);
    get visible(): boolean;
    set visible(value: boolean);
    get _finalVisible(): boolean;
    get internalVisible3(): boolean;
    get sortingOrder(): number;
    set sortingOrder(value: number);
    requestFocus(): void;
    get tooltips(): string | null;
    set tooltips(value: string | null);
    get blendMode(): BlendMode;
    set blendMode(value: BlendMode);
    get onStage(): boolean;
    get resourceURL(): string | null;
    set group(value: GGroup);
    get group(): GGroup;
    getGear(index: number): GearBase;
    protected updateGear(index: number): void;
    checkGearController(index: number, c: Controller): boolean;
    updateGearFromRelations(index: number, dx: number, dy: number): void;
    addDisplayLock(): number;
    releaseDisplayLock(token: number): void;
    private checkGearDisplay;
    get gearXY(): GearXY;
    get gearSize(): GearSize;
    get gearLook(): GearLook;
    get relations(): Relations;
    addRelation(target: GObject, relationType: number, usePercent?: boolean): void;
    removeRelation(target: GObject, relationType: number): void;
    get node(): Node;
    get parent(): GComponent;
    removeFromParent(): void;
    findParent(): GObject;
    get asCom(): GComponent;
    get asBtn(): GButton;
    get asList(): GList;
    get asLabel(): GLabel;
    get asLoader(): GLoader;
    get asLoader3D(): GLoader3D;
    get asImage(): GImage;
    get asTextField(): GTextField;
    get asGraph(): GGraph;
    get asGroup(): GGroup;
    as<T>(): T;
    static cast(obj: Node): GObject;
    get text(): string | null;
    set text(value: string | null);
    get icon(): string | null;
    set icon(value: string | null);
    get treeNode(): GTreeNode;
    get isDisposed(): boolean;
    dispose(): void;
    protected onEnable(): void;
    protected onDisable(): void;
    protected onUpdate(): void;
    protected onDestroy(): void;
    onClick(listener: Function, target?: any): void;
    onceClick(listener: Function, target?: any): void;
    offClick(listener: Function, target?: any): void;
    clearClick(): void;
    hasClickListener(): boolean;
    on(type: string, listener: Function, target?: any): void;
    once(type: string, listener: Function, target?: any): void;
    off(type: string, listener?: Function, target?: any): void;
    get draggable(): boolean;
    set draggable(value: boolean);
    get dragBounds(): Rect;
    set dragBounds(value: Rect);
    startDrag(touchId?: number): void;
    stopDrag(): void;
    get dragging(): boolean;
    localToGlobal(ax?: number, ay?: number, result?: Vec2): Vec2;
    globalToLocal(ax?: number, ay?: number, result?: Vec2): Vec2;
    localToGlobalRect(ax?: number, ay?: number, aw?: number, ah?: number, result?: Rect): Rect;
    globalToLocalRect(ax?: number, ay?: number, aw?: number, ah?: number, result?: Rect): Rect;
    handleControllerChanged(c: Controller): void;
    protected handleAnchorChanged(): void;
    handlePositionChanged(): void;
    protected handleSizeChanged(): void;
    protected handleGrayedChanged(): void;
    handleVisibleChanged(): void;
    hitTest(globalPt: Vec2, forTouch?: boolean): GObject;
    protected _hitTest(pt: Vec2, globalPt: Vec2): GObject;
    getProp(index: number): any;
    setProp(index: number, value: any): void;
    constructFromResource(): void;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
    private onRollOver;
    private onRollOut;
    private initDrag;
    private dragBegin;
    private dragEnd;
    private onTouchBegin_0;
    private onTouchMove_0;
    private onTouchEnd_0;
}
export declare class GObjectPartner extends Component {
    _emitDisplayEvents?: boolean;
    callLater(callback: any, delay?: number): void;
    onClickLink(evt: Event, text: string): void;
    protected onEnable(): void;
    protected onDisable(): void;
    protected update(dt: number): void;
    protected onDestroy(): void;
}
export interface IGRoot {
    inst: any;
}
export declare var Decls: {
    GRoot?: IGRoot;
};
export declare var constructingDepth: {
    n: number;
};
