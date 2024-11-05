import { NextResponse } from "next/server";
import pool from "@/libs/mysql";
import { RowDataPacket } from "mysql2";

export async function GET() {
  const schemaName = 'Bingo';
  let db;
    try {
        db = await pool.getConnection()

        const checkSchemaQuery = `SELECT COUNT(*) as count FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`;

        const [rows] = await db.execute<RowDataPacket[]>(checkSchemaQuery, [schemaName]);

        if (rows[0].count === 0) {
          // 스키마가 존재하지 않으면 생성
          const createSchemaQuery = `CREATE DATABASE \`${schemaName}\``;
          await db.execute(createSchemaQuery);
          return NextResponse.json({ message: `Schema ${schemaName} created successfully.` });
      } else {
          return NextResponse.json({ message: `Schema ${schemaName} already exists.` });
      }
    } catch (error : any) {
    
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}