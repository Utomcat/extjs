package com.ranyk;

import javassist.*;

import java.io.IOException;

/**
 * ClassName:DeCompile
 * Description:
 *
 * @author ranyi
 * @date 2020-07-10 20:27
 * Version: V1.0
 */
public class DeCompile {
    public static void main(String args[]) {
        ClassPool pool = ClassPool.getDefault();
        try {
            pool.insertClassPath("D:\\Download\\工作\\Intellij\\idea插件\\sencha-jetbrains-plugin\\lib\\657a0706093616c-6.0.13.614.jar");
            CtClass cc = pool.get("com.sencha.idea.LicenseValidator");
            CtMethod cm = cc.getDeclaredMethod("validateLicense", null);
            cm.setBody("return true;");
            cc.writeFile();
        } catch (NotFoundException e) {
            e.printStackTrace();
        } catch (CannotCompileException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
