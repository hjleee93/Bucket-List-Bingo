import { NextResponse } from "next/server";
import pool from "@/libs/mysql";
import { RowDataPacket } from "mysql2";

export async function POST() {
  const schemaName = 'Bingos';
  let db;
    try {
        db = await pool.getConnection()

        //TODO: 스키마 확인 부분 공통 함수로 뺄 수 있을 듯 
        const checkSchemaQuery = `SELECT COUNT(*) as count FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`;

        const [rows] = await db.execute<RowDataPacket[]>(checkSchemaQuery, [schemaName]);

        if (rows[0].count === 0) {
          // 스키마가 존재하지 않으면 생성
          const createSchemaQuery = `CREATE DATABASE \`${schemaName}\``;
          await db.execute(createSchemaQuery);
          return NextResponse.json({ message: `Schema ${schemaName} created successfully.` });

          // TODO: 테이블도 생성해야함
      } else {
        // 스키마가 존재하는 경우 post 실행
          return NextResponse.json({ message: `Schema ${schemaName} already exists.` });
      }
    } catch (error : any) {
    
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}

const checkTitleDup = (title: string ) => {
    `select `
}