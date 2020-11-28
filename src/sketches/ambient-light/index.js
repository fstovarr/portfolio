import ambientFrag from 'file-loader!./ambient.frag'
import ambientVert from 'file-loader!./ambient.vert'
import tsunami from '../../assets/images/tsunami.jpg'
import symmetricArt from '../../assets/images/symmetric_art.jpg'

export default p5 => {
  let theShader,
    shaderTexture,
    theta = 0,
    x,
    y,
    cameraLocation,
    camera

  let img,
    img2,
    canvas,
    lightColor = [255, 255, 255],
    intensity = 0

  p5.preload = () => {
    theShader = p5.loadShader(ambientVert, ambientFrag)
    img = p5.loadImage(tsunami)
    img2 = p5.loadImage(symmetricArt)
  }

  p5.setup = () => {
    canvas = p5.createCanvas(710, 400, p5.WEBGL)
    p5.noStroke()

    shaderTexture = p5.createGraphics(710, 400, p5.WEBGL)

    shaderTexture.noStroke()

    camera = p5.createCamera()
    p5.setCamera(camera)

    cameraLocation = p5.createVector(
      0,
      0,
      p5.height / 2.0 / p5.tan((p5.PI * 30.0) / 180.0)
    )

    x = -50
    y = 0
  }

  function updateCameraLocation() {
    if (p5.keyIsDown(p5.LEFT_ARROW)) cameraLocation.x -= 5
    if (p5.keyIsDown(p5.RIGHT_ARROW)) cameraLocation.x += 5
    if (p5.keyIsDown(p5.UP_ARROW)) cameraLocation.y -= 5
    if (p5.keyIsDown(p5.DOWN_ARROW)) cameraLocation.y += 5
  }

  p5.draw = () => {
    if (canvas) {
      updateCameraLocation()
      p5.background(200)

      camera.lookAt(0, 0, 0)
      camera.setPosition(cameraLocation.x, cameraLocation.y, cameraLocation.z)

      shaderTexture.shader(theShader)

      theShader.setUniform('resolution', [p5.width, p5.height])
      theShader.setUniform('time', p5.millis() / 1000.0)
      theShader.setUniform('mouse', [
        p5.mouseX,
        p5.map(p5.mouseY, 0, p5.height, p5.height, 0),
      ])
      theShader.setUniform('textureSize', [p5.width, p5.height])
      theShader.setUniform('intensity', (intensity % 100) / 100)
      theShader.setUniform('lightColor', lightColor)
      theShader.setUniform('tex0', img)

      shaderTexture.rect(0, 0, p5.width, p5.height)
      p5.texture(shaderTexture)

      p5.translate(-150, 0, 0)
      p5.push()
      p5.rotateZ(theta * p5.mouseX * 0.0001)
      p5.rotateX(theta * p5.mouseX * 0.0001)
      p5.rotateY(theta * p5.mouseX * 0.0001)
      theta += 0.05
      p5.sphere(80)
      p5.pop()

      theShader.setUniform('tex0', img2)

      shaderTexture.rect(0, 0, p5.width, p5.height)
      p5.texture(shaderTexture)

      p5.push()
      p5.translate(250, 0, 0)
      p5.rotateZ(theta * p5.mouseX * 0.0001)
      p5.rotateX(theta * p5.mouseX * 0.0001)
      p5.rotateY(theta * p5.mouseX * 0.0001)

      p5.torus(80, 20, 64, 64)
      p5.pop()
    }
  }

  p5.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.intensity !== undefined) {
      intensity = props.intensity - 1 < 0 ? 0 : props.intensity - 1
    }

    if (props.lightColor !== undefined) {
      lightColor = [props.lightColor.r, props.lightColor.g, props.lightColor.b]
    }
  }
}
