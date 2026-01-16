import mongoose, { Types } from "mongoose";
export declare const UserModel: mongoose.Model<{
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
    firstName: string;
    lastName: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    username: string;
    password: string;
    firstName: string;
    lastName: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        username: string;
        password: string;
        firstName: string;
        lastName: string;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        username: string;
        password: string;
        firstName: string;
        lastName: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const AccountsModel: mongoose.Model<{
    user: Types.ObjectId;
    balance?: number | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    user: Types.ObjectId;
    balance?: number | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    user: Types.ObjectId;
    balance?: number | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    user: Types.ObjectId;
    balance?: number | null;
}, mongoose.Document<unknown, {}, {
    user: Types.ObjectId;
    balance?: number | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    user: Types.ObjectId;
    balance?: number | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        user: Types.ObjectId;
        balance?: number | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        user: Types.ObjectId;
        balance?: number | null;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    user: Types.ObjectId;
    balance?: number | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    user: Types.ObjectId;
    balance?: number | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map